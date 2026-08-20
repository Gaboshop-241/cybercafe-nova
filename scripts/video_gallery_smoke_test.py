from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:3000"


def verify(page) -> None:
    page.goto(BASE_URL, wait_until="networkidle")
    section = page.locator(".smart-video-gallery")
    section.scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    if not section.evaluate("node => node.classList.contains('is-revealed')"):
        raise RuntimeError("La galerie vidéo ne se révèle pas au défilement.")

    video = page.locator(".smart-video-gallery__player")
    if not video.evaluate("node => node.currentSrc.includes('smart-cyber-facade-motion_1e567c90.mp4')"):
        raise RuntimeError("La source vidéo intégrée est incorrecte.")
    if video.evaluate("node => node.readyState") < 1:
        raise RuntimeError("Les métadonnées de la vidéo ne sont pas disponibles.")

    page.locator(".smart-video-gallery__play").click()
    page.wait_for_timeout(500)
    if video.evaluate("node => node.paused"):
        raise RuntimeError("La vidéo ne démarre pas avec la commande Lire.")

    page.locator(".smart-video-gallery__footer button").click()
    page.wait_for_timeout(150)
    if not video.evaluate("node => node.paused"):
        raise RuntimeError("La vidéo ne se met pas en pause avec la commande dédiée.")


def main() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        try:
            desktop = browser.new_page(viewport={"width": 1280, "height": 720}, timezone_id="Africa/Libreville")
            verify(desktop)
            mobile = browser.new_page(viewport={"width": 375, "height": 812}, timezone_id="Africa/Libreville")
            verify(mobile)
            print("Galerie vidéo validée : chargement, lecture, pause et révélation sur ordinateur et mobile.")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
