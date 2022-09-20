import React, { useState } from "react";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit();
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  const [unit, setUnit] = useState("celcius");
  if (unit === `celcius`) {
    return (
      <span class="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span class="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="" onClick={showCelcius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}