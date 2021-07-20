'use strict';

const today = new Date();
const period = 14;
let newDate = new Date();
newDate.setDate(today.getDate() + period);

const secElem = document.querySelector('#seconds');
console.log(secElem.firstChild);

const counter = setInterval(function () {
  let now = new Date().getTime();
  let difference = newDate.getTime() - now;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  console.log(`Time: ${days} days, ${hours}hrs, ${minutes}m, ${seconds}sec. `);
}, 1000);
