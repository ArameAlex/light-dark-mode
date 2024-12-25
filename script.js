// Select the button and body
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

function ligtOrDark(){
  const random = Math.random()
  // if it was dark mode
  if (body.classList.contains("dark-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Dark Mode";
    toggleButton.classList = "dark-mode";
    if (random < 0.5){
      body.classList = "light-mode back1";
    } else {
      body.classList = "light-mode back2";
    }
    
  } else if (body.classList.contains("light-mode")){
    // button color and text
    toggleButton.textContent = "Switch to Light Mode";
    toggleButton.classList = "light-mode";
    if (random < 0.5){
      body.classList = "dark-mode back3";
    } else {
      body.classList = "dark-mode back4";
    }
  }
}