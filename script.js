const counterEl = document.getElementById("counter");
const startBtn = document.getElementById("start_btn");
const pouseBtn = document.getElementById("pouse_btn");

let counter = 0;
let counterInterval;
let count = true;

function start() {
  if (count) {
    counterInterval = setInterval(() => {
      counter++;
      counterEl.textContent = counter;
    }, 1000);
    count = !count;
  }
}

function pouse() {
  clearInterval(counterInterval);
  count = !count;
}

startBtn.addEventListener("click", start);
pouseBtn.addEventListener("click", pouse);
