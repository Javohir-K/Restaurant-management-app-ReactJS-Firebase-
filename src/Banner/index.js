import React from "react";
import "./Banner.css";

function index() {
  return (
    <div className="home-banner">
      <div className="banner-container">
        <div className="banner-left">
            <h2>Buy 2 get 3</h2>
            <h1>big burgers</h1>
            <a href="/">read more</a>
        </div>
        <div className="banner-right">
            <h2>traditional</h2>
            <h1>japanese sushi</h1>
            <a href="/">read more</a>
        </div>
      </div>
    </div>
  );
}

export default index;
