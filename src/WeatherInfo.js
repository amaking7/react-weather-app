import "./App.css";
import Temperature from "./Temperature";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm">
          <Temperature />
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
