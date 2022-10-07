import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
export default function WeatherContent(props) {
  return (
    <div className="Content">
      <h1 className="city mb-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row main-temperature">
        <div className="col mt-3">
          <img src={props.data.iconUrl} alt="weather" />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="text-capitalize mb-3">{props.data.description}</div>
      </div>
      <div className="row weather-details mb-5">
        <div className="col">
          Feels like: {Math.round(props.data.feels_like)}°
        </div>
        <div className="col">Wind: {Math.round(props.data.wind)} km/h</div>
        <div className="col">Humidity: {Math.round(props.data.humidity)}% </div>
      </div>
    </div>
  );
}
