const API_KEY = "1d9095efd9e05c29f071ae31c892be7c";
let city_input = document.querySelector("input");
let submit = document.querySelector("button");
let weather_O = document.querySelector(".weather");
let degree = document.querySelector(".deg");
let city_name = document.querySelector(".cityname");
let humidity_O = document.querySelector(".humidity_0");
let wind_O = document.querySelector(".wind_0");

submit.addEventListener("click", function () {
  let input = city_input.value.trim();
  getData(input);
});
city_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let input = city_input.value.trim();
    getData(input);
  }
});

function replace_data(city, temp, humidity, wind, weather) {
  city_name.textContent = city;
  degree.textContent = `${temp}°C`;
  humidity_O.textContent = `${humidity}%`;
  wind_O.textContent = `${wind} KM/H`;

  switch (weather) {
    case "Clear":
      weather_O.src = "IMGS/clear.png";
      break;
    case "Clouds":
      weather_O.src = "IMGS/clouds.png";
      break;
    case "Drizzle":
      weather_O.src = "IMGS/drizzle.png";
      break;
    case "Mist":
      weather_O.src = "IMGS/mist.png";
      break;
    case "Rain":
      weather_O.src = "IMGS/Rain.png";
      break;
    case "Snow":
      weather_O.src = "IMGS/snow.png";
      break;

    default:
      break;
  }
}

async function getData(input) {
  const q = encodeURIComponent(input);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    city = result.name;
    temp = result.main.temp;
    humidity = result.main.humidity;
    weather = result.weather[0].main;
    wind = result.wind.speed;

    replace_data(city, temp, humidity, wind, weather);
  } catch (error) {
    console.error(error.message);
  }
}
