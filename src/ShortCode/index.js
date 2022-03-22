import React from "react";
import "./ShortCode.css";

import Img1 from "./img/mainimage1.jpg";
import Img2 from "./img/bg1.png";
import Img3 from "./img/icon.png";

function index() {
  return (
    <div className="shorts-wrapper">
      <div className="shorts-left">
        <img src={Img3} alt="" id="img3" />
        <p>mon - fri 7pm-8pm</p>
        <h3>visit us for happy hour!</h3>
        <h2>15% off</h2>
      </div>
      <div className="shorts-center">
        <div className="shorts-center-inner">
          <img src={Img1} alt="" id="img1" />
          <img src={Img2} alt="" id="img2" />
        </div>
      </div>
      <div className="shorts-right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa
          suscipit eaque perferendis velit quos odio doloremque quibusdam,
          dolorem ullam.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default index;
