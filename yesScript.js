const successMessages = [
  "Yay! You said yes! My heart is doing backflips! ❤️",
  "I knew you couldn’t resist me, my love! (Just kidding... or am I? 😏)",
  "You just made me the happiest person alive! (And my cat approves too!)",
  "This calls for a celebration! Pizza? Ice cream? Both? 🍕🍦",
  "You’re stuck with me now, sweetheart! (No refunds, no returns!)",
  "I’m so happy you said yes! (Now let’s plan our hotwheel collection together xd.)",
  "You’ve officially made my day, my week, my year! (And my mom is already planning our wedding xd.)",
  "I’m over the moon! (And my Spotify playlist is now 100% love songs for you.)",
  "I’m so glad you said yes! (Now I can finally stop overthinking my texts to you xd.)",
  "You’re my favorite yes! (And my phone’s photo gallery is ready for more cute pics of us.)",
  "You just made my dreams come true! (And my pillow is ready for happy tears tonight.)",
  "I’m so happy you’re in my life! (And my heart is officially yours forever.)",
];

const messageText = document.getElementById("message-text");
let index = 0;

function showNextMessage() {
  messageText.classList.remove("fade-in");

  setTimeout(() => {
    messageText.textContent = successMessages[index];
    messageText.classList.add("fade-in");

    index = (index + 1) % successMessages.length;
  }, 1000);
}

messageText.textContent = successMessages[index];
messageText.classList.add("fade-in");
index++;
setInterval(showNextMessage, 4000);

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
