import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import LocationOverview from "./LocationOverview";
import WeatherInfo from "./WeatherInfo";
import FutureForecast from "./FutureForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <LocationOverview />
            <WeatherInfo />
            <hr />
            <FutureForecast />
          </div>
        </div>
        <small>
          <a
            href="https://github.com/amaking7/react-weather-app"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Amanda
        </small>
      </div>
    </div>
  );
}

export default App;
