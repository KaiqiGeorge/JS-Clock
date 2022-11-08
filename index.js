let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
function setDate() {
  let now = new Date();

  let second = now.getSeconds();
  const secondDegree=((second/60)*360)+90;
  secondHand.style.transform=`rotate(${secondDegree}deg)`;

  let mins = now.getMinutes();
  const minsDegree=((mins/60)*360)+((second/60)*6)+90;
  minHand.style.transform=`rotate(${minsDegree}deg)`;
  
 

  let hour = now.getHours();
  const hourDegree=((hour/12)*360)+((mins/60)*30)+90;
  hourHand.style.transform=`rotate(${hourDegree})`;
  console.log(hour)
}

setInterval(setDate,1000);

setDate();



