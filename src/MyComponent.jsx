import React, { useState } from "react";
import "./MyComponent.css";
import cars from "./practice"

console.log(cars);
const [honda , tesla] = cars;

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;


function MyComponent() {
  
  return (
    <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
       <th>Top Colour</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>
    
  );
}

export default MyComponent;
