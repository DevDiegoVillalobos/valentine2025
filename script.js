const messages = [
  "Are you sure, sweetheart?",
  "Really sure, my love?",
  "Are you positive, darling?",
  "Pookie please... think about it!",
  "Just think about it, sugarplum!",
  "If you say no, I’ll be really sad, cupcake...",
  "I’ll be very sad, my little star...",
  "I’ll be very very very sad, honeybun...",
  "Are you absolutely sure, my sunshine?",
  "Please reconsider, my little dove!",
];

let messageIndex = 0;

function handleNoClick() {
  if (messageIndex === 9) {
    window.location.href = "no_page.html";
  } else {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// Audio Controls
const audio = document.getElementById("background-audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const volumeSlider = document.getElementById("volume-slider");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "🎵";
  } else {
    audio.pause();
    playPauseBtn.textContent = "🔇";
  }
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

const yesMessageText = document.getElementById("yes-message-text");
let yesIndex = 0;

function showNextSuccessMessage() {
  yesMessageText.classList.remove("fade-in");

  setTimeout(() => {
    yesMessageText.textContent = successMessages[yesIndex];
    yesMessageText.classList.add("fade-in");

    yesIndex = (yesIndex + 1) % successMessages.length;
  }, 1000);
}

yesMessageText.textContent = successMessages[index];
yesMessageText.classList.add("fade-in");
yesIndex++;
setInterval(showNextSuccessMessage, 5000);
