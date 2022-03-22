import React from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import Img1 from "../../img/BANNER-1.png";
import Img2 from "../../img/BANNER-2.png";
import Img3 from "../../img/BANNER-3.png";

function CarouselPage() {
  return (
    <div className="carousel_container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="carousel_btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="carousel_btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="carousel_btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
