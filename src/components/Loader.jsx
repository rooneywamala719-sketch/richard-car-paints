import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-box">
        <h1>Richard <span>Car Paints</span></h1>
        <p>Loading Premium Experience...</p>

        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Loader;