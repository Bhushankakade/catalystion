document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const emailConsent = document.getElementById("email-consent");
  const signupBtn = document.getElementById("signup-btn");
  const signupForm = document.getElementById("signup-form");

  // Enable or disable the button based on form validation
  function toggleSignupButton() {
    const isFormValid = emailInput.value.trim() !== "" && emailConsent.checked;
    signupBtn.disabled = !isFormValid;
  }

  // Add event listeners for input and checkbox changes
  emailInput.addEventListener("input", toggleSignupButton);
  emailConsent.addEventListener("change", toggleSignupButton);

  // Handle form submission
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (signupBtn.disabled) {
      alert("Please fill in the required fields.");
      return;
    }

    // Redirect to the Catalyst register page
    console.log("Redirecting to catalyst-register-page.html"); // Debug log
    window.location.href = "catalyst-register-page.html";
  });
});
