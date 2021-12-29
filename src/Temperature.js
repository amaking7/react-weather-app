import React from "react";
import "./Weather.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="current-city-temperature" id="current-temperature">
        {props.celsiusTemp}
      </span>
      <span className="weather-units">
        <a href="_" id="celsius-link" class="active">
          °C
        </a>{" "}
        |
        <a href="_" id="fahrenheit-link">
          °F
        </a>
      </span>
    </div>
  );
}
