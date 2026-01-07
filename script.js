document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const header = document.querySelector("header");
  const reveals = document.querySelectorAll(".reveal");

  /* =====================
     THEME TOGGLE
  ====================== */
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "Light";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggleBtn.textContent = isDark ? "Light" : "Dark";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* =====================
     SCROLL HANDLER
  ====================== */
  function handleScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    // Reveal animation
    reveals.forEach((el) => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });

    // Header shadow
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});