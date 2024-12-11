const secInfo = document.getElementById("sec");
const minInfo = document.getElementById("min");
const hourInfo = document.getElementById("hour");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let timer;

startBtn.addEventListener("click", () => {
  timer = setInterval(timeSeter, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer); // Stop the timer when resetting
  secInfo.innerHTML = "00";
  minInfo.innerHTML = "00";
  hourInfo.innerHTML = "00";
});

function timeSeter() {
  let currentSeconds = Number(secInfo.innerHTML);
  let currentMinutes = Number(minInfo.innerHTML);
  let currentHours = Number(hourInfo.innerHTML);

  currentSeconds++;

  if (currentSeconds === 60) {
    currentSeconds = 0;
    currentMinutes++;
  }

  if (currentMinutes === 60) {
    currentMinutes = 0;
    currentHours++;
  }

  secInfo.innerHTML = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
  minInfo.innerHTML = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  hourInfo.innerHTML = currentHours < 10 ? "0" + currentHours : currentHours;
}