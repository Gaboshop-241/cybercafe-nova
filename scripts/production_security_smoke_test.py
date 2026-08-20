from playwright.sync_api import sync_playwright


PRODUCTION_URL = "https://cybercafe-nova.vercel.app/"
REQUIRED_HEADERS = {
    "content-security-policy",
    "strict-transport-security",
    "x-content-type-options",
    "x-frame-options",
    "referrer-policy",
    "permissions-policy",
    "cross-origin-opener-policy",
}


def main() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        try:
            page = browser.new_page(viewport={"width": 1280, "height": 720}, timezone_id="Africa/Libreville")
            errors: list[str] = []
            page.on("pageerror", lambda error: errors.append(f"pageerror: {error}"))
            page.on("console", lambda message: errors.append(f"console: {message.text}") if message.type == "error" else None)
            def record_failed_request(request) -> None:
                if "smart-cyber-facade-motion" in request.url and request.failure == "net::ERR_ABORTED":
                    return
                errors.append(f"requestfailed: {request.url} :: {request.failure}")

            page.on("requestfailed", record_failed_request)

            response = page.goto(PRODUCTION_URL, wait_until="networkidle")
            if response is None:
                raise RuntimeError("La page de production ne répond pas.")
            missing_headers = REQUIRED_HEADERS.difference(response.headers.keys())
            if missing_headers:
                raise RuntimeError(f"En-têtes de sécurité manquants : {sorted(missing_headers)}")
            page.wait_for_selector(".smart-hero")
            page.wait_for_selector("#boot-loader", state="detached", timeout=2500)

            video = page.locator(".smart-video-gallery__player")
            video.scroll_into_view_if_needed()
            page.wait_for_function("document.querySelector('.smart-video-gallery__player').readyState >= 1", timeout=10000)
            page.locator(".smart-video-gallery__play").click()
            page.wait_for_timeout(300)
            if video.evaluate("node => node.paused"):
                raise RuntimeError("La lecture vidéo ne démarre pas en production.")
            if errors:
                raise RuntimeError("Erreurs navigateur détectées : " + " | ".join(errors))
            print("Production validée : en-têtes CSP actifs, démarrage, interface et vidéo fonctionnels sans erreur navigateur.")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
