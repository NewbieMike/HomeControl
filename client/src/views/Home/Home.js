import React from "react";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="container">
      <div className="row h-100">
        <a
          href="/weather"
          className="col-4 vh-100 d-flex align-items-center justify-content-center position-relative bg-weather"
        >
          <span className="fs-1 text-light bg-text">
            Weather <i className="bi bi-thermometer-sun"></i>
          </span>
        </a>
        <a
          href="/home"
          className="col-4 vh-100 d-flex align-items-center justify-content-center position-relative bg-home"
        >
          <span className="fs-1 text-light bg-text">
            Home <i className="bi bi-house"></i>
          </span>
        </a>
        <a
          href="/settings"
          className="col-4 vh-100 d-flex align-items-center justify-content-center position-relative bg-settings"
        >
          <span className="fs-1 text-light bg-text">
            Settings <i className="bi bi-gear"></i>
          </span>
        </a>
      </div>
    </div>
  );
};
