import React, { useState } from "react";
import "./Weather.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsiusTemp * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="current-city-temperature" id="current-temperature">
          {props.celsiusTemp}
        </span>
        <span className="weather-units">
          °C |
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            {"  "} °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="current-city-temperature" id="current-temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="weather-units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{"  "}°F
        </span>
      </div>
    );
  }
}
