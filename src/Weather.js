import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    // Make API call with city
    const apiKey = "4d85cd59016d6a2d49846056378f35f1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function captureCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row search">
            <div className="col-9">
              <form className="row g-2" id="search-bar">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a city"
                    id="city-input"
                    onChange={captureCity}
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
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
