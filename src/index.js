// Date
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let daynumber = now.getDate();
let year = now.getFullYear();

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
  "December"
];
let month = months[now.getMonth()];

let datesentence = `${day} ${daynumber} ${month} ${year}`;
let nowdate = document.querySelector("#nowdate");
nowdate.innerHTML = datesentence;

//Time
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let timedisplay = `${hour}:${minutes}`;
let currenttime = document.querySelector("#currenttime");
currenttime.innerHTML = timedisplay;

//Sear city

function search(city) {
  let apiKey = "0c4a5f256d61f80243c94cd29cb8479c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

// Display temperature

function showTemperature(response) {
  document.querySelector("#newcity").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  }
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

// HandleSubmit

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#yourcity").value;
  search(city);
}

// Search city bis
function changecity(event) {
  event.preventDefault();
  let cityinput = document.querySelector("#yourcity");
  let newcity = document.querySelector("#newcity");
  newcity.innerHTML = cityinput.value;
}

let submitbutton = document.querySelector("#submitbutton");
submitbutton.addEventListener("click", handleSubmit);

//Current position

function searchLocation(position) {
  let apiKey = "0c4a5f256d61f80243c94cd29cb8479c";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentPosition = document.querySelector("#currentPosition");
currentPosition.addEventListener("click", getCurrentLocation);

search("Milan");

/*let submitbutton = document.querySelector("#submitbutton");
submitbutton.addEventListener("click", changecity);

//Celsius
function showWeather(response) {
  let temp = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}°C`;
}

//Fahrenheit

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "0c4a5f256d61f80243c94cd29cb8479c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);


// Fahrenheit
function changetempf(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "39°F";
}

let clickf = document.querySelector("#far");
clickf.addEventListener("click", changetempf);

// Celsius
function changetempc(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "4°C";
}


let clickc = document.querySelector("#cels");
clickc.addEventListener("click", changetempc);
*/
