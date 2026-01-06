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