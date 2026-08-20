from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:3000"


def verify() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        try:
            page.goto(BASE_URL, wait_until="networkidle")
            page.locator(".smart-theme-toggle").click()
            page.wait_for_timeout(150)

            dark_state = page.evaluate(
                """() => ({
                  theme: document.documentElement.classList.contains('dark'),
                  storedTheme: localStorage.getItem('theme'),
                  background: getComputedStyle(document.querySelector('.smart-site')).backgroundColor,
                  servicesColor: getComputedStyle(document.querySelector('.smart-services')).color,
                })"""
            )
            expected_dark = {
                "theme": True,
                "storedTheme": "dark",
                "background": "rgb(16, 27, 33)",
                "servicesColor": "rgb(255, 250, 244)",
            }
            if dark_state != expected_dark:
                raise RuntimeError(f"Échec du mode sombre : {dark_state}")

            page.screenshot(path="/home/ubuntu/screenshots/smart-cyber-theme-dark-desktop.png", full_page=True)
            page.reload(wait_until="networkidle")
            persisted_theme = page.evaluate(
                """() => ({
                  theme: document.documentElement.classList.contains('dark'),
                  storedTheme: localStorage.getItem('theme'),
                })"""
            )
            if persisted_theme != {"theme": True, "storedTheme": "dark"}:
                raise RuntimeError(f"Échec de la persistance : {persisted_theme}")

            page.locator(".smart-theme-toggle").click()
            page.wait_for_timeout(150)
            light_state = page.evaluate(
                """() => ({
                  theme: document.documentElement.classList.contains('dark'),
                  storedTheme: localStorage.getItem('theme'),
                  background: getComputedStyle(document.querySelector('.smart-site')).backgroundColor,
                })"""
            )
            expected_light = {
                "theme": False,
                "storedTheme": "light",
                "background": "rgb(255, 250, 244)",
            }
            if light_state != expected_light:
                raise RuntimeError(f"Échec du retour au mode clair : {light_state}")

            page.screenshot(path="/home/ubuntu/screenshots/smart-cyber-theme-light-desktop.png", full_page=True)
            page.set_viewport_size({"width": 375, "height": 812})
            page.reload(wait_until="networkidle")
            page.locator(".smart-theme-toggle").click()
            page.wait_for_timeout(150)
            mobile_state = page.evaluate(
                """() => {
                  const themeButton = document.querySelector('.smart-theme-toggle').getBoundingClientRect();
                  const menuButton = document.querySelector('.smart-menu-button').getBoundingClientRect();
                  return {
                    theme: document.documentElement.classList.contains('dark'),
                    storedTheme: localStorage.getItem('theme'),
                    noHorizontalOverflow: document.documentElement.scrollWidth <= window.innerWidth,
                    controlsSeparated: themeButton.right <= menuButton.left,
                  };
                }"""
            )
            expected_mobile = {
                "theme": True,
                "storedTheme": "dark",
                "noHorizontalOverflow": True,
                "controlsSeparated": True,
            }
            if mobile_state != expected_mobile:
                raise RuntimeError(f"Échec mobile : {mobile_state}")

            page.screenshot(path="/home/ubuntu/screenshots/smart-cyber-theme-dark-mobile.png", full_page=True)
            page.locator(".smart-theme-toggle").click()
            page.wait_for_timeout(150)
            print("Thèmes validés : basculement clair/sombre, contraste essentiel et persistance locale.")
        finally:
            browser.close()


if __name__ == "__main__":
    verify()
