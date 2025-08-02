import React from "react";
import "./MyComponent.css";

const img = "https://picsum.photos/200"


function MyComponent() {
  return (
    <div>
      <h1 className="heading">My Favourite Foods</h1>
      
      <div>
        <img src={img} />

        <img className="food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s" />
        <img className="food" src="https://i.lezzet.com.tr/images-xxlarge-secondary/mukemmel-et-nasil-pisirilir-314a2432-6096-47e3-95c8-fa3e5a311da5.jpg" />
        <img className="food" src="https://i.lezzet.com.tr/images-xxlarge-secondary/taze-meyve-ve-sebze-nasil-secilir-e0009203-a2fb-46be-990f-dbeafe11ed9f.jpg" />

      </div>
      
    </div>
  );
}

export default MyComponent;
