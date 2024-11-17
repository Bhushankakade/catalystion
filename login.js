// popup-scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const popup = document.getElementById("login-popup");
  const closeBtn = document.querySelector(".close-btn");

  // Show Popup
  loginBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Hide Popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close Popup When Clicking Outside
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
