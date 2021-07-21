'use strict';

const today = new Date();
const period = 14;
let newDate = new Date();
newDate.setDate(today.getDate() + period);

const daysElem = document.querySelector('#days');
const hoursElem = document.querySelector('#hours');
const minsElem = document.querySelector('#minutes');
const secsElem = document.querySelector('#seconds');

const counter = setInterval(function () {
  let now = new Date().getTime();
  let difference = newDate.getTime() - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElem.firstElementChild.innerHTML = days;
  daysElem.lastElementChild.dataset.value = days;
  hoursElem.firstElementChild.innerHTML = hours;
  hoursElem.lastElementChild.dataset.value = hours;
  minsElem.firstElementChild.innerHTML = minutes;
  minsElem.lastElementChild.dataset.value = minutes;
  secsElem.firstElementChild.innerHTML = seconds;
  secsElem.lastElementChild.dataset.value = seconds;
}, 1000);
