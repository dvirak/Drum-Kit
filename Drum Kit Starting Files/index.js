// TODO Selector for each internal HTML
// TODO Take letter and assign to sound
// TODO Assign keyboard strokess to sound
// TODO Create switch statement to play sound based on letter clicked or pressed

// Create variables for each sound
const crashSoundW = new Audio("./sounds/crash.mp3");
const kickBassSoundA = new Audio("./sounds/kick-bass.mp3");
const snareSoundS = new Audio("./sounds/snare.mp3");
const tom1SoundD = new Audio("./sounds/tom-1.mp3");
const tom2SoundJ = new Audio("./sounds/tom-2.mp3");
const tom3SoundK = new Audio("./sounds/tom-3.mp3");
const tom4SoundL = new Audio("./sounds/tom-4.mp3");

// Create button list
const buttonList = document.querySelectorAll("button.drum");
// Add event listeners to button mouse click
for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function () {
    playSound(this.innerText);
    addPressed(this.innerText);
  });
}

// Add event listeners for each keyboard button press
document.addEventListener("keydown", function (button) {
  playSound(button.key);
  addPressed(button.key);
});

// Function to play sound based on button or keyboard press
// if no matching button, just console log the key
function playSound(letter) {
  switch (letter) {
    case "w":
      crashSoundW.play();
      break;
    case "a":
      kickBassSoundA.play();
      break;
    case "s":
      snareSoundS.play();
      break;
    case "d":
      tom1SoundD.play();
      break;
    case "j":
      tom2SoundJ.play();
      break;
    case "k":
      tom3SoundK.play();
      break;
    case "l":
      tom4SoundL.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

// Function to for button pressed animation
function addPressed(letter) {
  document.querySelector(`.${letter}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${letter}`).classList.remove("pressed");
  }, 100);
}
