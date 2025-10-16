const API_KEY = "1d9095efd9e05c29f071ae31c892be7c";
let city_input = document.querySelector("input");
let submit = document.querySelector("button");
let weather = document.querySelector(".weather");
let degree = document.querySelector(".deg");
let city_name = document.querySelector(".cityname");
let humidity_O = document.querySelector(".humidity");
let wind_O = document.querySelector(".wind");
// humidity_O.textContent = 50;

function replace_data(city, temp, humidity, wind) {
  // adding values
  city_name.textContent = city;
  degree.textContent = `${temp}°C`;
  humidity_O.textContent = `${humidity}%`;
  wind_O.textContent = `${wind} KM/H`;
}

async function getData() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=chandrapur&appid=1d9095efd9e05c29f071ae31c892be7c&units=metric`;
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

    console.log(city);
    console.log(temp);
    console.log(humidity);
    console.log(weather);
    console.log(wind);
    console.log(result);

    replace_data(city, temp, humidity, wind);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
