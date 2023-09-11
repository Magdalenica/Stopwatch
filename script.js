const timeDiv = document.querySelector(".time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let secunds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

//on my way
function pokreniSat() {
  secunds++;

  if (secunds == 60) {
    secunds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = secunds < 10 ? "0" + secunds : secunds;

  timeDiv.innerHTML = `${h}:${m}:${s}`;
}
const pokreni = function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(pokreniSat, 1000);
};
const stop = function () {
  clearInterval(timer);
};

const reset = function () {
  secunds = 0;
  minutes = 0;
  hours = 0;
  timeDiv.innerHTML = `0${hours}:0${minutes}:0${secunds}`;
};

startBtn.addEventListener("click", pokreni);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
//
//
//
//
//the second way

// let seconds = 0;
// let interval;

// const stopWatch = function () {
//   seconds++;
//   let hours = Math.floor(seconds / 3600);
//   let minutes = Math.floor((seconds - hours * 3600) / 60); // u jednos satu imamo 60 minuta ili unutar jednog minuta imamo 60 sekundi
//   //(300-0*3600)/60 = 5min;
//   let sec = seconds % 60; //60%60=0

//   sec < 10 ? (sec = `0${sec}`) : sec;
//   minutes < 10 ? (minutes = `0${minutes}`) : minutes;
//   hours < 10 ? (hours = `0${hours}`) : hours;

//   timeDiv.innerHTML = `${hours}:${minutes}:${sec}`;
// };

// const start = function () {
//   if (interval) {
//     //pitamo da li je interval aktivan, ako jeste da vrati return. Odnosno, prekida moju komandu da interval ponovo pozove.
//     return;
//   }
//   interval = setInterval(stopWatch, 1000);
// };

// const stop = function () {
//   clearInterval(interval);
//   interval = null; //kada kliknemo dugme stop, moramo da vratimo da interval bude null. (u if-u ce pitati da li je interval aktivan, dobice ce odgovor false)
// };

// const reset = function () {
//   stop();
//   seconds = 0;
//   timeDiv.innerHTML = "00:00:00";
// };

// startBtn.addEventListener("click", start);

// stopBtn.addEventListener("click", stop);

// resetBtn.addEventListener("click", reset);
