import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {/* Search */}
      <div className="row search">
        <div className="col-9">
          <form className="row g-2" id="search-bar">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                id="city-input"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                id="search-button"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Location Overview */}
      <div className="row">
        <div class="col-sm location-overview">
          <h1 id="current-city">New York City</h1>
          Last updated: <span id="date-time">Tue, 2:00 PM</span>
          <br />
          <span id="weather-description">Partly cloudy</span>
        </div>
      </div>
      {/* Weather Info */}
      <div className="row">
        <div className="col-sm">
          <div className="weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloudy"
              id="current-weather-icon"
            />
            <span className="current-city-temperature" id="current-temperature">
              31
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
          Humidity: <span id="current-city-humidity">41</span>%
          <br />
          Wind: <span id="current-city-wind">10</span> km/h
        </div>
      </div>
    </div>
  );
}
