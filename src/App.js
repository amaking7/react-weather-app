import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather />
          </div>
        </div>
        <small>
          <a
            href="https://github.com/amaking7/react-weather-app"
            target="_blank"
            rel="noreferrer"
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
