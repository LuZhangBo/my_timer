const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const start = document.querySelector(".start");

const message = document.querySelector(".message");

let counterMinutes = 0;
let counterSeconds = 0;

const updateTime = () => {
  minutes.innerHTML = `0${counterMinutes}`.slice(-2);
  seconds.innerHTML = `0${counterSeconds}`.slice(-2);
};

const countDown = () => {
  if (counterMinutes === 0 && counterSeconds === 0) {
    return;
  } else if (counterSeconds === 0) {
    --counterMinutes;
    counterSeconds = 59;
  } else {
    --counterSeconds;
  }
  updateTime();
};

plus.onclick = () => {
  if (counterSeconds === 59) {
    counterSeconds = 0;
    ++counterMinutes;
  } else {
    ++counterSeconds;
  }
  updateTime();
};

minus.onclick = () => {
  if ((counterMinutes === 0) & (counterSeconds === 0)) {
    return;
  } else if (counterSeconds === 0) {
    --counterMinutes;
    counterSeconds = 59;
  } else {
    --counterSeconds;
  }
  updateTime();
};

start.onclick = () => {
  plus.disabled = true;
  minus.disabled = true;
  start.disabled = true;

  const intervalofTime = setInterval(countDown, 1000);
  const totalSeconds = counterSeconds + counterMinutes * 60;
  setTimeout(() => {
    clearInterval(intervalofTime);
    message.innerHTML = "Time's over!";
  }, totalSeconds * 1000);
};
