import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FutureForecast.css";
import FutureForecastDay from "./FutureForecastDay";

export default function FutureForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    const apiKey = "4d85cd59016d6a2d49846056378f35f1";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="FutureForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <FutureForecastDay forecast={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();

    return null;
  }
}
