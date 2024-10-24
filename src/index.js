function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  let displayValue = document.querySelector("#display-value");  
  displayValue.innerHTML = ${temperature};
}

let apiKey ="1b65ca4080fbdt34boc9087362443ad0";
let city ="#current-city";
let apiUrl ='https://api.shecodes.io/weather/v1/current?query=&{city}&key=&{apiKey}&units=metric';
axios.get(apiUrl).then(displayTemperature);

