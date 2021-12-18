import "./App.css";

export default function FutureForecast() {
  return (
    <div className="FutureForecast">
      <div className="row">
        <div className="col-sm mini-future-forecast">
          <span className="future-day">Wed</span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            className="mini-future-forecast-image"
            alt="rainy"
          />
          <br />
          19°C
        </div>
        <div className="col-sm mini-future-forecast">
          <span className="future-day">Thu</span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="mini-future-forecast-image"
            alt="scattered clouds"
          />
          <br />
          17°C
        </div>
        <div className="col-sm mini-future-forecast">
          <span className="future-day">Fri</span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="mini-future-forecast-image"
            alt="scattered clouds"
          />
          <br />
          20°C
        </div>
        <div className="col-sm mini-future-forecast">
          <span className="future-day">Sat</span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            className="mini-future-forecast-image"
            alt="few clouds"
          />
          <br />
          19°C
        </div>
        <div className="col-sm mini-future-forecast">
          <span className="future-day">Sun</span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="mini-future-forecast-image"
            alt="clear sky"
          />
          <br />
          21°C
        </div>
      </div>
    </div>
  );
}
