const emailInput = document.getElementById("email");
const emailConsent = document.getElementById("emailConsent");
const submitButton = document.getElementById("submitButton");

// Enable the submit button only when email and consent are filled
function toggleSubmitButton() {
  if (emailInput.value && emailConsent.checked) {
    submitButton.disabled = false;
    submitButton.classList.add("active");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("active");
  }
}

emailInput.addEventListener("input", toggleSubmitButton);
emailConsent.addEventListener("change", toggleSubmitButton);

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value;
});
