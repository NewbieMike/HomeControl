import React, { useState, useEffect } from "react";

function Clock({ offset = 0 }) {
  console.log(offset);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    const currentTime = new Date();
    const utcTime =
      currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const offsetTime = new Date(utcTime + 3600000 * offset);
    setTime(offsetTime);
  };

  return <div className="fs-4">{time.toLocaleTimeString()}</div>;
}

export default Clock;
