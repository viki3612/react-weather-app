import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
export default function WeatherContent(props) {
  return (
    <div className="Content mt-3">
      <h1 className="city mb-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row main-temperature">
        <div className="col">
          <img src={props.data.iconUrl} alt="weather" />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="text-capitalize m-3">{props.data.description}</div>
      </div>
      <div className="row weather-details m-3">
        <div className="col">
          <i className="fa-solid fa-temperature-low"></i> Feels like:{" "}
          {Math.round(props.data.feels_like)}°
        </div>
        <div className="col">
          <i className="fa-solid fa-wind"></i> Wind:{" "}
          {Math.round(props.data.wind)} km/h
        </div>
        <div className="col">
          <i className="fa-solid fa-droplet"></i> Humidity:{" "}
          {Math.round(props.data.humidity)}%{" "}
        </div>
      </div>
    </div>
  );
}
