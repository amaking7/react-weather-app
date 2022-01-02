import React from "react";
import "./FutureForecast.css";

export default function FutureForecast(props) {
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
