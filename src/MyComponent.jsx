import React from "react";
import "./MyComponent.css";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};
customStyle.color = "blue";

function MyComponent() {
  return (
    
    <h1 style={customStyle}>My Favourite Foods</h1>

  );
}

export default MyComponent;
