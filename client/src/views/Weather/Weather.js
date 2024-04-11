import { React, useState, useEffect } from "react";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import logoApp from "../../media/HomeManage_transparent.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Weather.scss";
export const Weather = () => {
  const [data, setData] = useState(null);
  const [temperatureAvg, setTemperatureAvg] = useState(null);
  const [weekDays, setWeekDays] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.04&longitude=20.01&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  useEffect(() => {
    const splitArray = (arrayTemp, arrayTime, chunkSize) => {
      const result = [];
      for (let i = 0; i < arrayTemp.length; i += chunkSize) {
        const chunk = arrayTemp.slice(i, i + chunkSize);
        const chunkDate = arrayTime.slice(i, i + chunkSize);
        const sum = chunk.reduce((acc, val) => acc + val, 0);
        result.push({
          temp: sum / chunk.length,
          date: chunkDate[0],
          y: sum / chunk.length,
          x: i / chunkSize,
        });
      }
      setTemperatureAvg(result);
      setWeekDays();
    };
    const chunkSize = 24;
    const splitArrays = data
      ? splitArray(data.hourly.temperature_2m, data.hourly.time, chunkSize)
      : "";
  }, [data]);

  console.log(temperatureAvg);
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
        <div className="weather-chart-container">
          {data ? (
            <XYPlot
              width={600}
              height={400}
              //getX={temperatureAvg.map((d, index) => d.x[index])}
            >
              <HorizontalGridLines />
              <LineSeries color="red" data={temperatureAvg} />
              {/* <LineSeries
                color="yellow"
                data={[
                  { x: 1, y: 15 },
                  { x: 2, y: 5 },
                  { x: 3, y: 1 },
                ]}
              /> */}
              <XAxis title="Date" />
              <YAxis title="Temp" />
            </XYPlot>
          ) : (
            "Loading chart..."
          )}
        </div>
      </div>
    </div>
  );
};
