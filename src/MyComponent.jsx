import React from "react";
import "./MyComponent.css";

const date = new Date ();
const time = date.getHours();
let sentence = "";
let color = {
  color: "",
};


if (time < 12) 
{
  sentence = "Good Morning";
  color.color = "red";
} 
else if (time < 18) 
{
  sentence = "Good Afternoon";
  color.color = "green";
} 
else 
{
  sentence = "Good Night";
  color.color = "blue";
}


function MyComponent() {
  return (


    



    
    <h1 style={color} className="heading" >{sentence}</h1>







  );
}

export default MyComponent;


//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.