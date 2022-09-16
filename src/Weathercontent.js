import React from "react";

export default function WeatherContent(props) {
  return (
    <div className="Content">
      <h1 className="city mb-3">{props.data.city}</h1>
      <ul>
        <li>{props.data.date}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt="weather" />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
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
