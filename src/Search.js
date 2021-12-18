import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row search">
        <div className="col-9">
          <form className="row g-2" id="search-bar">
            <div className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter a city"
                id="city-input"
              />
              <input
                type="submit"
                value="Search"
                class="btn btn-primary"
                type="button"
                id="search-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
