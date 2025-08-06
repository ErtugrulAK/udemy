import React from "react";
import "./MyComponent.css";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

//var numbers = [3, 56, 2, 48, 5];

//----------------------------------------------------------------------------------
//Map -Create a new array by doing something with each item in an array.
//----------------------------------------------------------------------------------

//function double (x){
//  return x*2;
//
//}
//const newNumbers= numbers.map(double);

//var newNumbers = [];
//
//numbers.forEach(function double (x){
//  newNumbers.push(x*2)
//});

//var newNumbers = [];
//
//numbers.map(function double (x){
//  newNumbers.push(x*2)
//});

//----------------------------------------------------------------------------------
//Filter - Create a new array by keeping the items that return true.
//----------------------------------------------------------------------------------

//const newNumbers = numbers.filter(function (num) {
//  return num < 10
//}
//
//);

//var newNumbers = [];
//
//numbers.forEach(function (num){
//  if (num < 10)
//  {
//    newNumbers.push(num);
//  }
//});

//----------------------------------------------------------------------------------
//Reduce - Accumulate a value by doing something to each item in an array.
//----------------------------------------------------------------------------------

//var newNumber = 0;
//numbers.forEach(function (currentNumber) {
//  newNumber += currentNumber
//})

//var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//    return accumulator + currentNumber;
//})

//----------------------------------------------------------------------------------
//Find - find the first item that matches from an array.
//----------------------------------------------------------------------------------

//const newNumber = numbers.find(function (num) {
//  return num > 10;
//})

//----------------------------------------------------------------------------------
//FindIndex - find the index of the first item that matches.
//----------------------------------------------------------------------------------

//const newNumber = numbers.findIndex(function (num) {
//  return num > 10;
//})

function MyComponent() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default MyComponent;
