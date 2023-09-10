const dayOfTheWeekEl = document.querySelector("#dayOfTheWeek");
const currentUTCTimeEl = document.querySelector("#currentUTCTime");

const daysInAWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const updateValues = () => {
  dayOfTheWeekEl.textContent = daysInAWeek[new Date().getDay()];
  currentUTCTimeEl.textContent = new Date().getTime();
};

updateValues(); // for initial updating

setInterval(() => updateValues(), 10); // updates every seconds
