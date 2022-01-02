import axios from "axios";
import React from "react";
import "./FutureForecast.css";

export default function FutureForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "4d85cd59016d6a2d49846056378f35f1";
  let latitude = props.data.coordinates.lat;
  let longitude = props.data.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="FutureForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="current-weather-icon"
          />
          <div className="forecast-temperatures">
            <span className="forecast-max-temp">19°</span>
            <span className="forecast-min-temp">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
