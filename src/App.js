import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="Madrid" />
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/amaking7/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Amanda
        </footer>
      </div>
    </div>
  );
}

export default App;
