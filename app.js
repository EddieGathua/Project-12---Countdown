const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 11, 13, 8, 35, 0);

const date = futureDate.getDate();
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = days[day];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.innerHTML =
  `Giveaway ends on ${day}, ${date} ${month} ${year} ${hours}` +
  ":" +
  `${minutes} a.m.`;

//future time in milliseconds
let futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeDifference = futureTime - today;

  //convert timeDifference to days, hours, minutes and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //display the remaining time
  items[0].innerHTML = days;
  items[1].innerHTML = hours;
  items[2].innerHTML = minutes;
  items[3].innerHTML = seconds;

  //if time is up, display the message
  if (timeDifference < 0) {
    clearInterval(countdown);
    deadline.innerHTML = "The giveaway has ended. Thank you for participating!";
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
