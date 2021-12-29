import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DateFormat from "./DateFormat";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
      iconId: response.data.weather[0].icon,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
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
            <h1 id="current-city">{weatherData.city}</h1>
            Last updated:{" "}
            <span id="date-time">
              <DateFormat date={weatherData.date} />
            </span>
            <br />
            <span id="weather-description">{weatherData.description}</span>
          </div>
        </div>
        {/* Weather Info */}
        <div className="row">
          <div className="col-sm">
            <div className="weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="current-weather-icon"
              />
              <span
                className="current-city-temperature"
                id="current-temperature"
              >
                {weatherData.temperature}
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
            <span id="current-city-humidity">{weatherData.humidity}</span>%
            <br />
            Wind: <span id="current-city-wind">{weatherData.wind}</span> km/h
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4d85cd59016d6a2d49846056378f35f1";
    let units = "metric";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
