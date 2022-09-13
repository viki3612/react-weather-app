import React, { useState } from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Sofia</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
          20°C
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: 20 km/h</li>
            <li>Precipitation: 15%</li>
            <li>Humidity:35%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
