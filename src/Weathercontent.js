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
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt="weather" />
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} km/h </li>

            <li>Humidity: {Math.round(props.data.humidity)} % </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
