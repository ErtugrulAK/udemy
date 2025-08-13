import React, { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  setInterval(latestTime, 10000);

  const time = new Date().toLocaleTimeString();

  const [newTime , setTime] = useState(time);

  function latestTime() 
  {
    const timeLatest = new Date().toLocaleTimeString();
    setTime(timeLatest);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default MyComponent;
