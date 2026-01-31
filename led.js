const wrapper = document.querySelector(".wrapper");
wrapper.style.backgroundColor = "#141313";
const showSegButton = document.querySelector("#show-segments");

showSegButton.addEventListener("click", () => {
  const segments = document.querySelectorAll(".seg");
  segments.forEach((seg) => seg.classList.toggle("off"));
});

// function showNumber(num) {
//   segments.forEach((seg) => seg.classList.remove("on"));

//   digitMap[num].forEach((letter) => {
//     document.querySelector(`.seg.${letter}`).classList.add("on");
//   });
// }

// code for countdown for a single ledDigit object
// async function countdown(num, digit) {
//   for (let i = num; i >= 0; i--) {
//     digit.setValue(i);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// }

// code for showing a countdwon for double digits
async function countdown(num, tenDigit, unitDigit) {
  //check if its a single digit number
  if (num < 10) {
    tenDigit.setValue(0);
    unitDigit.setValue(num);
    for (let i = num; i >= 0; i--) {
      unitDigit.setValue(i);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return;
  }
  let tens = Math.floor(num / 10);
  let units = num % 10;
  tenDigit.setValue(tens);
  unitDigit.setValue(units);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  for (let i = num - 1; i >= 0; i--) {
    tens = Math.floor(i / 10);
    units = i % 10;
    tenDigit.setValue(tens);
    unitDigit.setValue(units);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

function createColon() {
  const colon = document.createElement("div");
  colon.classList.add("colon");
  const dot1 = document.createElement("div");
  dot1.classList.add("cell", "active");
  const dot2 = document.createElement("div");
  dot2.classList.add("cell", "active");
  colon.appendChild(dot1);
  colon.appendChild(dot2);
  wrapper.appendChild(colon);
}

function createTimeObjects() {
  let hourtenDigit = new LedDigit(wrapper);
  let hourunitDigit = new LedDigit(wrapper);

  createColon();

  let minutetenDigit = new LedDigit(wrapper);
  let minuteunitDigit = new LedDigit(wrapper);

  createColon();

  let secondtenDigit = new LedDigit(wrapper);
  let secondunitDigit = new LedDigit(wrapper);

  hourtenDigit.setValue(0);
  hourunitDigit.setValue(0);
  minutetenDigit.setValue(0);
  minuteunitDigit.setValue(0);

  secondtenDigit.setValue(0);
  secondunitDigit.setValue(0);
}

function showTime() {
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  let hourDigit1 = hours % 10;
  let hourDigit2 = Math.floor(hours / 10);

  let minutetenDigit1 = minutes % 10;
  let minutetenDigit2 = Math.floor(minutes / 10);

  minutetenDigit.setValue(minutetenDigit2);
  minuteunitDigit.setValue(minutetenDigit1);

  hourtenDigit.setValue(hourDigit2);
  hourunitDigit.setValue(hourDigit1);

  let secondsDigit1 = seconds % 10;
  let secondsDigit2 = Math.floor(seconds / 10);

  secondtenDigit.setValue(secondsDigit2);
  secondunitDigit.setValue(secondsDigit1);
}

// code for showing current time
// createTimeObjects()
//setInterval(showTime, 1000);

const scrollingDigit = new ScrollingDigit(wrapper);

// code for counting from 0 to 9 smooothly using ScrollDigit class
let n = 0;
setInterval(() => {
  scrollingDigit.set(n);
  n = (n + 1) % 10;
}, 1000);
