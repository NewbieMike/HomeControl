import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Clock from "./Clock";

import logoApp from "../../media/HomeManage_transparent.png";

export const Component = () => {
  const [active, setActive] = useState(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/#">
          <img src={logoApp} alt="app-logo" className="logo-nav" />
          Home Manage
        </a>
        <div>
          <Clock
            offset={
              JSON.parse(JSON.parse(localStorage.getItem("settings")).timezone)
                .offset
            }
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a className="navbar-brand d-flex align-items-center" href="/#">
                <img src={logoApp} alt="app-logo" className="logo-nav" />
                Home Manage
              </a>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className={
                    active === "weather" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="/weather"
                >
                  Weather
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "home" ? "nav-link active" : "nav-link"}
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    active === "settings" ? "nav-link active" : "nav-link"
                  }
                  href="/settings"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  classNameName: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
