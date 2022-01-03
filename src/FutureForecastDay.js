import React from "react";
import "./FutureForecast.css";

export default function FutureForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = props.forecast.dt;
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="FutureForecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`}
        alt={props.forecast.description}
        id="current-weather-icon"
      />
      <div className="forecast-temperatures">
        <span className="forecast-max-temp">{maxTemperature()}°</span>
        <span className="forecast-min-temp">{minTemperature()}°</span>
      </div>
    </div>
  );
}
