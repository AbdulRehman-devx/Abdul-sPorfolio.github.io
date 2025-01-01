// THEME TOGGLE LOGIC
const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});