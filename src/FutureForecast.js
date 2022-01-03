import axios from "axios";
import React, { useState } from "react";
import "./FutureForecast.css";
import FutureForecastDay from "./FutureForecastDay";

export default function FutureForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FutureForecast">
        <div className="row">
          <div className="col">
            <FutureForecastDay forecast={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4d85cd59016d6a2d49846056378f35f1";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
