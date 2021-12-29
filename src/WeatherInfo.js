import React from "react";
import "./Weather.css";
import DateFormat from "./DateFormat";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {/* Location Overview */}
      <div className="row">
        <div class="col-sm location-overview">
          <h1 id="current-city">{props.data.city}</h1>
          Last updated:{" "}
          <span id="date-time">
            <DateFormat date={props.data.date} />
          </span>
          <br />
          <span id="weather-description">{props.data.description}</span>
        </div>
      </div>
      {/* Weather Info */}
      <div className="row">
        <div className="col-sm">
          <div className="weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="current-weather-icon"
            />
            <span className="current-city-temperature" id="current-temperature">
              {props.data.temperature}
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
        </div>
        <div className="col-sm">
          Humidity:{" "}
          <span id="current-city-humidity">{props.data.humidity}</span>%
          <br />
          Wind: <span id="current-city-wind">{props.data.wind}</span> km/h
        </div>
      </div>
    </div>
  );
}
