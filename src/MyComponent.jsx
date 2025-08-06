import React from "react";
import "./MyComponent.css";
import Form from "./Form";


var userIsRegistered = true;


function MyComponent() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default MyComponent;
