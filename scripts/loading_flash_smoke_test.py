from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:3000"


def inspect_initial_frame(page, expected_theme: str) -> None:
    page.route("**/src/main.tsx*", lambda route: route.abort())
    page.goto(BASE_URL, wait_until="domcontentloaded")

    initial_state = page.evaluate(
        """() => {
          const prerender = document.querySelector('.seo-prerender');
          const body = getComputedStyle(document.body);
          const prerenderStyle = getComputedStyle(prerender);
          return {
            dark: document.documentElement.classList.contains('dark'),
            background: body.backgroundColor,
            prerenderPosition: prerenderStyle.position,
            prerenderWidth: prerenderStyle.width,
            prerenderHeight: prerenderStyle.height,
            prerenderOverflow: prerenderStyle.overflow,
          };
        }"""
    )

    expected_background = "rgb(16, 27, 33)" if expected_theme == "dark" else "rgb(255, 250, 244)"
    expected_dark = expected_theme == "dark"
    expected_state = {
        "dark": expected_dark,
        "background": expected_background,
        "prerenderPosition": "absolute",
        "prerenderWidth": "1px",
        "prerenderHeight": "1px",
        "prerenderOverflow": "hidden",
    }
    if initial_state != expected_state:
        raise RuntimeError(f"État initial inattendu : {initial_state}")


def verify() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        try:
            light_page = browser.new_page(viewport={"width": 1280, "height": 720})
            inspect_initial_frame(light_page, "light")

            dark_page = browser.new_page(viewport={"width": 375, "height": 812})
            dark_page.add_init_script("localStorage.setItem('theme', 'dark')")
            inspect_initial_frame(dark_page, "dark")

            full_page = browser.new_page(viewport={"width": 1280, "height": 720})
            full_page.goto(BASE_URL, wait_until="networkidle")
            if not full_page.locator(".smart-hero").is_visible():
                raise RuntimeError("Le site complet ne s’est pas affiché après l’initialisation.")

            print("Chargement validé : fond initial cohérent, contenu SEO invisible et site complet opérationnel.")
        finally:
            browser.close()


if __name__ == "__main__":
    verify()
