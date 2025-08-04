import React from "react";
import "./MyComponent.css";
import { add, multiply, subtract, divide} from "./calculator";


function MyComponent() {
  return (
    
    <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
    </ul>
    

  );
}

export default MyComponent;


