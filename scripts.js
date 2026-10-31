// Light/dark switch, remembered in your browser.
(function () {
  var root = document.documentElement;
  var sw = document.getElementById("themeToggle");

  function render() {
    var isDark = root.getAttribute("data-theme") === "dark";
    sw.setAttribute("aria-checked", String(isDark));
    sw.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  sw.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("portfolio-theme", next); } catch (e) {}
    render();
  });

  render();
})();
