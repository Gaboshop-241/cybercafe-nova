(() => {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#101b21");
    }
  } catch (_) {
    // Le site reste disponible lorsque le stockage local est indisponible.
  }

  const startedAt = performance.now();
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    const loader = document.getElementById("boot-loader");
    if (!loader) return;
    const remaining = Math.max(0, 520 - (performance.now() - startedAt));
    window.setTimeout(() => {
      loader.classList.add("is-leaving");
      window.setTimeout(() => loader.remove(), 300);
    }, remaining);
  };

  window.addEventListener("smart-cyber:ready", dismiss, { once: true });
  window.setTimeout(dismiss, 4000);
})();
