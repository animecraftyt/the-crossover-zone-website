document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "portal-transition";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = '<div class="portal-ring"></div>';
  document.body.appendChild(overlay);

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      event.preventEvent?.();
      event.preventDefault();
      document.body.classList.add("portal-open");
      overlay.classList.add("active");

      window.setTimeout(() => {
        window.location.href = href;
      }, 1050);
    });
  });
});
