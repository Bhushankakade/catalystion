document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuOptions = document.getElementById("menu-options");

  menuButton.addEventListener("click", () => {
    if (menuOptions.classList.contains("hidden")) {
      menuOptions.classList.remove("hidden");
      menuOptions.style.display = "block";
    } else {
      menuOptions.classList.add("hidden");
      menuOptions.style.display = "none";
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !menuButton.contains(event.target) &&
      !menuOptions.contains(event.target)
    ) {
      menuOptions.classList.add("hidden");
      menuOptions.style.display = "none";
    }
  });
});
