const btnDarkModeToggle = document.getElementById("btn-dark-mode-toggle");
const themeSystem = localStorage.getItem("themeSystem") || "light";

btnDarkModeToggle.addEventListener('click', () => {
  let oldTheme = localStorage.getItem("themeSystem") || "light";
  let newTheme = oldTheme === "light" ? "dark" : "light";

  localStorage.setItem("themeSystem", newTheme);
  defineCurrentTheme(newTheme);
});

function defineCurrentTheme(theme) {
  const darkSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'>...</svg>";
  const lightSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-sun' viewBox='0 0 16 16'>...</svg>";
  document.documentElement.setAttribute("data-theme", theme);
  if (theme == "light") {
    btnDarkModeToggle.innerHTML = darkSvg;
  } else {
    btnDarkModeToggle.innerHTML = lightSvg;
  }
}

defineCurrentTheme(themeSystem);
