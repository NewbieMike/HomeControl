import { React, useState, useEffect } from "react";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import "./Settings.scss";
const Settings = () => {
  const [settings, setSettings] = useState("");

  const labelStyle = "original";
  const timezones = {
    ...allTimezones,
  };
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("settings")));
    const sett = JSON.parse(localStorage.getItem("settings"));
    setSettings(sett);
  }, []);
  console.log(settings);

  const changeSettings = (event, setting, value) => {
    setSettings((prevState) => ({
      ...prevState,
      [setting]: value,
    }));
  };

  const saveSettings = (event) => {
    event.preventDefault();
    document.getElementById("success-alert").classList.remove("opacity-0");
    localStorage.setItem("settings", JSON.stringify(settings));
    setTimeout(() => {
      document.getElementById("success-alert").classList.add("opacity-0");
    }, 3000);
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="section-title fs-1 text-light mt-5 pt-3">Settings</div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Localzation
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-globe"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Latitude"
                  aria-label="Latitude"
                  aria-describedby="basic-addon1"
                  value={settings ? settings.latitude : ""}
                  onChange={(e) =>
                    changeSettings(e, "latitude", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-globe2"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longitude"
                  aria-label="Longitude"
                  aria-describedby="basic-addon1"
                  value={settings ? settings.longitude : ""}
                  onChange={(e) =>
                    changeSettings(e, "longitude", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Timezone
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="mt-2 mb-2 fw-bold">
                Selected Timezone:{" "}
                {JSON.parse(localStorage.getItem("settings")).timezone}
              </div>
              <select
                className="form-select"
                onChange={(e) => changeSettings(e, "timezone", e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.timezone} value={option.offset}>
                    {console.log(option)}
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success mt-2"
        onClick={(e) => saveSettings(e)}
        disabled={
          localStorage.getItem("settings") === JSON.stringify(settings)
            ? true
            : false
        }
      >
        Save changes
      </button>
      <div
        className="alert alert-success position-fixed bottom-0 end-0 opacity-0"
        role="alert"
        id="success-alert"
      >
        Settings saved!
      </div>
    </div>
  );
};

export default Settings;
