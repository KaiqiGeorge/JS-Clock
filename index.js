let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
function setDate() {
  let now = new Date();

  let second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  let min = now.getMinutes();
  const minsDegree = (min / 60) * 360 + (second / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  let hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();
