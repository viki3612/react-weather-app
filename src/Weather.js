import React, { useState } from "react";
import Weathercontent from "./Weathercontent";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [background, setBackground] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });

    let pexelsApiKey =
      "563492ad6f9170000100000145a90d0d1df34715bf82ec969d716060";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${response.data.weather[0].description}&per_page=1`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
  }

  function search() {
    const apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handlePexelResponse(response) {
    setBackground(response.data.photos[0].src.original);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div
        className="Weather"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="search">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button className="btn btn-default" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <Weathercontent data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
