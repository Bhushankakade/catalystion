// Open the form modal when the "Post Pitch" button is clicked
function openPitchForm() {
  document.getElementById("pitchFormModal").style.display = "block";
}

// Close the form modal when the "X" is clicked
function closePitchForm() {
  document.getElementById("pitchFormModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target == document.getElementById("pitchFormModal")) {
    closePitchForm();
  }
};
