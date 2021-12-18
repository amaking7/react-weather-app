import "./App.css";

export default function LocationOverview() {
  return (
    <div className="LocationOverview">
      <div className="row">
        <div class="col-sm location-overview">
          <h1 id="current-city">New York City</h1>
          Last updated: <span id="date-time">Tue, 2:00 PM</span>
          <br />
          <span id="weather-description">Partly cloudy</span>
        </div>
      </div>
    </div>
  );
}
