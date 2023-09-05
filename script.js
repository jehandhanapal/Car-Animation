let moveaudio = new Audio("sound.mp3");
const wheelEl = document.querySelectorAll("#wheel");
const trackEl = document.querySelector(".track");
const carEl = document.querySelector(".carbody");

window.addEventListener("click", gamestart);
function gamestart() {
  moveaudio.play();
  moveaudio.loop = true;
  wheelEl.forEach((box) => box.classList.add("wheelrun"));
  trackEl.classList.add("carmove");
  carEl.classList.add("shake");
}
