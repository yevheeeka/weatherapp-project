function displayDates() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = document.querySelector(".time");
  time.innerHTML = `${hours}:${minutes}`;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let day = days[currentDate.getDay()];
  let dayNumber = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let date = document.querySelector(".date");
  date.innerHTML = `${day} - ${dayNumber} ${month}`;
}
displayDates();
function clickDaily(event) {
  event.preventDefault();
  document.querySelector("#hours-1").innerHTML = "14:00";
  document.querySelector("#hours-2").innerHTML = "16:00";
  document.querySelector("#hours-3").innerHTML = "18:00";
  document.querySelector("#hours-4").innerHTML = "20:00";
  document.querySelector("#hours-5").innerHTML = "22:00";
}
let dailyLink = document.querySelector("#daily-link");
dailyLink.addEventListener("click", clickDaily);
function clickWeekly(event) {
  event.preventDefault();
  document.querySelector("#hours-1").innerHTML = "Mon";
  document.querySelector("#hours-2").innerHTML = "Tue";
  document.querySelector("#hours-3").innerHTML = "Wed";
  document.querySelector("#hours-4").innerHTML = "Thu";
  document.querySelector("#hours-5").innerHTML = "Fri";
}
let weeklyLink = document.querySelector("#weekly-link");
weeklyLink.addEventListener("click", clickWeekly);
function displayTemp(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
}
function displayCityValues(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let cityName = document.querySelector(".city");
  cityName.innerHTML = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric`;
  let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemp);
}
let form = document.querySelector("#search-city-submit");
form.addEventListener("click", displayCityValues);
// when you open website yout current info shown
function displayCurrent(response) {
  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let currentDescription = document.querySelector("#description");
  currentDescription.innerHTML = response.data.weather[0].description;
}
function displayCurrentValues(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
  let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayCurrent);
}

navigator.geolocation.getCurrentPosition(displayCurrentValues);
