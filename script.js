const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// cek tema tersimpan
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "Light";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        } 
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
});