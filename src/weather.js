const API_KEY = "3cdf0c30e65f4a2f430f423bd6365537";

const weather = document.querySelector("#weather span");
const weatherImg = document.querySelector("#weather img");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C / ${data.name}`;
      weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
