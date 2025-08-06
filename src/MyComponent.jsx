import React from "react";
import "./MyComponent.css";
import Login from "./Login";





var isLoggedIn = true;

const currentTime = new Date().getHours();
console.log(currentTime);


function MyComponent() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      
      
    </div>
  );
}

export default MyComponent;
