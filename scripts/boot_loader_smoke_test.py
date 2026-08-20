from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:3000"
SCREENSHOT = Path("/home/ubuntu/screenshots/smart-cyber-boot-loader.png")


def verify_initial_loader(page) -> None:
    page.route("**/src/main.tsx*", lambda route: route.abort())
    page.goto(BASE_URL, wait_until="domcontentloaded")
    state = page.evaluate(
        """() => {
          const loader = document.getElementById('boot-loader');
          const style = getComputedStyle(loader);
          return {
            display: style.display,
            position: style.position,
            background: style.backgroundColor,
            label: loader.getAttribute('aria-label'),
            mark: loader.querySelector('.boot-loader__mark')?.textContent,
          };
        }"""
    )
    expected = {
        "display": "grid",
        "position": "fixed",
        "background": "rgb(28, 41, 47)",
        "label": "Chargement de SMART CYBER PK11",
        "mark": "SC",
    }
    if state != expected:
        raise RuntimeError(f"État du chargeur inattendu : {state}")
    page.screenshot(path=str(SCREENSHOT), full_page=False)


def verify_transition(page, dark: bool) -> None:
    if dark:
        page.add_init_script("localStorage.setItem('theme', 'dark')")
    page.goto(BASE_URL, wait_until="domcontentloaded")
    page.wait_for_selector("#boot-loader", state="detached", timeout=2500)
    if not page.locator(".smart-hero").is_visible():
        raise RuntimeError("Le héros n’est pas visible après la disparition du chargeur.")
    if bool(page.evaluate("document.documentElement.classList.contains('dark')")) != dark:
        raise RuntimeError("Le thème initial ne correspond pas à la préférence mémorisée.")


def verify() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        try:
            initial_page = browser.new_page(viewport={"width": 1280, "height": 720})
            verify_initial_loader(initial_page)

            light_page = browser.new_page(viewport={"width": 1280, "height": 720})
            verify_transition(light_page, dark=False)

            dark_mobile_page = browser.new_page(viewport={"width": 375, "height": 812})
            verify_transition(dark_mobile_page, dark=True)
            print("Chargeur validé : logo SC visible, transition terminée et thèmes clair/sombre préservés.")
        finally:
            browser.close()


if __name__ == "__main__":
    verify()
