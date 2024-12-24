// Select the button and body
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

function ligtOrDark(){
  // if it was dark mode
  if (body.classList.contains("dark-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Dark Mode";
    toggleButton.classList = "dark-mode";
    // body color
    body.classList = "light-mode";
  } else if (body.classList.contains("light-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Light Mode";
    toggleButton.classList = "light-mode";
    // body color
    body.classList = "dark-mode";
  }
}