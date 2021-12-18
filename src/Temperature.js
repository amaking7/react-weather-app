import "./App.css";

export default function Temperature() {
  return (
    <div className="Temperature">
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
          <a href="#" id="celsius-link" class="active">
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
