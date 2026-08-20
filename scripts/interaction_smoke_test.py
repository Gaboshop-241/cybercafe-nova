from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:3000"


def expected_status(page) -> str:
    return page.evaluate(
        """() => {
          const parts = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Africa/Libreville', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
          }).formatToParts(new Date());
          const value = (type) => parts.find((part) => part.type === type)?.value || '';
          const minutes = Number(value('hour')) * 60 + Number(value('minute'));
          return new Set(['Mon', 'Tue', 'Wed', 'Fri']).has(value('weekday')) && minutes >= 480 && minutes < 1200
            ? 'OUVERT MAINTENANT'
            : 'FERMÉ ACTUELLEMENT';
        }"""
    )


def verify(page) -> None:
    page.goto(BASE_URL, wait_until="networkidle")
    page.wait_for_selector(".smart-hero__card-top")
    actual = page.locator(".smart-hero__card-top").inner_text().strip()
    expected = expected_status(page)
    if actual != expected:
        raise RuntimeError(f"Statut incohérent : attendu {expected}, obtenu {actual}")

    page.locator("#pass").scroll_into_view_if_needed()
    page.wait_for_timeout(650)
    if not page.locator("#pass").evaluate("node => node.classList.contains('is-revealed')"):
        raise RuntimeError("La section tarifs ne reçoit pas sa classe de révélation au défilement.")

    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(750)
    unseen = page.locator("[data-reveal]:not(.is-revealed)").count()
    if unseen:
        raise RuntimeError(f"{unseen} section(s) n’ont pas été révélées au défilement.")


def main() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path="/usr/bin/chromium")
        try:
            desktop = browser.new_page(viewport={"width": 1280, "height": 720}, timezone_id="Africa/Libreville")
            verify(desktop)
            mobile = browser.new_page(viewport={"width": 375, "height": 812}, timezone_id="Africa/Libreville")
            verify(mobile)
            print("Interactions validées : statut de Libreville cohérent et routes révélées sur ordinateur et mobile.")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
