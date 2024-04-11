import { React, useState, useEffect } from "react";
import logoApp from "../../media/HomeManage_transparent.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Weather.scss";
export const Weather = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.04&longitude=20.01&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  return (
    <div className="container weather-container">
      <div className="weather-content">
        <div className="section-titme fs-1 text-light">Weather Forecast</div>
        <div className="temperature-card-container row">
          {data
            ? data.hourly.time.map((item, index) => (
                <>
                  <div className="card col-1 m-1" key={item}>
                    <img src={logoApp} className="card-img-top" alt="..." />
                    <div className="d-flex flex-column">
                      <span className="card-text w-100 row">
                        {item.split("T")[0]}
                      </span>
                      <span className="card-text w-100 row">
                        {item.split("T")[1]}
                      </span>
                      <span className="card-text w-100 card-text-size">
                        {data.hourly.temperature_2m[index] < 0.0 ? (
                          <i className="bi bi-thermometer"></i>
                        ) : (
                          ""
                        )}
                        {data.hourly.temperature_2m[index] > 0.0 &&
                        data.hourly.temperature_2m[index] < 15.0 ? (
                          <i className="bi bi-thermometer-low"></i>
                        ) : (
                          ""
                        )}
                        {data.hourly.temperature_2m[index] > 15.0 &&
                        data.hourly.temperature_2m[index] < 30.0 ? (
                          <i className="bi bi-thermometer-half"></i>
                        ) : (
                          ""
                        )}
                        {data.hourly.temperature_2m[index] > 30.0 ? (
                          <i className="bi bi-thermometer-high"></i>
                        ) : (
                          ""
                        )}
                        {data.hourly.temperature_2m[index]}
                        {data.hourly_units.temperature_2m}
                      </span>
                      <span className="card-text w-100 card-text-size">
                        <i className="bi bi-cloud"></i>
                        {data.hourly.relative_humidity_2m[index]}
                        {data.hourly_units.relative_humidity_2m}
                      </span>
                      <span className="card-text w-100 card-text-size">
                        <i className="bi bi-speedometer2"></i>
                        {data.hourly.wind_speed_10m[index]}
                        {data.hourly_units.wind_speed_10m}
                      </span>
                    </div>
                  </div>
                  {index === 23 ||
                  index === 47 ||
                  index === 71 ||
                  index === 95 ||
                  index === 119 ||
                  index === 143 ||
                  index === 168 ? (
                    <>
                      <span className="col-9"></span>
                      <span className="col-12 text-light fs-2">
                        {index === 23 ? "Tommorow:" : ""}
                        {index === 47
                          ? data.hourly.time[index].split("T")[0]
                          : ""}
                        {index === 71
                          ? data.hourly.time[index].split("T")[0]
                          : ""}
                        {index === 95
                          ? data.hourly.time[index].split("T")[0]
                          : ""}
                        {index === 119
                          ? data.hourly.time[index].split("T")[0]
                          : ""}
                        {index === 143
                          ? data.hourly.time[index].split("T")[0]
                          : ""}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
