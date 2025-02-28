function lightStatus() {
  const root = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    root.classList.remove("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("dark-theme");
  }
}

applySavedTheme();
