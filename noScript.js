const failMessages = [
  "It's okay, my love. I respect your choice. ❤️ (But I’ll still cry into my pillow later.)",
  "Mmm, I understand. I’ll just be here... eating ice cream... thinking of you.",
  "I understand. You’re always in my heart. (And my Spotify playlist.)",
  "It’s okay. I’ll still smile thinking of you. (And maybe stalk your Instagram a little.)",
  "No worries. My feelings for you remain the same. (But my dog is officially Team Me now.)",
  "It’s alright. I’ll always cherish you. (And the memes you sent me, our pets, the hotwheel you never give me...xd.)",
  "I accept your decision. You’re forever special to me. (But my mom still asks about you, you know that I talk about you with her xd?.)",
  "It’s okay. I’ll always keep you in my heart. (And my phone’s photo gallery.)",
];

const messageText = document.getElementById("message-text");
let index = 0;

function showNextFailMessage() {
  messageText.classList.remove("fade-in");

  setTimeout(() => {
    messageText.textContent = failMessages[index];
    messageText.classList.add("fade-in");

    index = (index + 1) % failMessages.length;
  }, 1000);
}

messageText.textContent = failMessages[index];
messageText.classList.add("fade-in");
index++;
setInterval(showNextFailMessage, 4000);

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
