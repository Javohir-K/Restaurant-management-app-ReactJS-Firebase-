import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import CarouselPage from "./components/Carousel/CarouselPage";
import { db } from "./firebase";
import {
  Pizza,
  Burger,
  Sushi,
  Steaks,
  Noodles,
  Drinks,
  Desserts,
  Specials,
} from "./Foods";
import HomeCounter from "./HomeCounter";
import Banner from "./Banner";
import BlogPost from "./BlogPost";
import HomeBanner2 from "./HomeBanner2";
import ServiceC from "./ServiceC";
import ShortCode from "./ShortCode";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_container_slider">
          <CarouselPage />
        </div>
        <Banner />
        <div className="home_products">
          <Specials />
        </div>
        <HomeCounter />
        <ShortCode />
        <BlogPost />
        <HomeBanner2 />
        <ServiceC />
        {/* <div className="home_products" id="burger">
          <div className="anchor"></div>
          <Burger />
        </div>
        <div className="home_products" id="pizza">
          <div className="anchor"></div>

          <Pizza />
        </div>

        <div className="home_products" id="sushi">
          <div className="anchor"></div>

          <Sushi />
        </div>

        <div className="home_products" id="noodles">
          <div className="anchor"></div>

          <Noodles />
        </div>

        <div className="home_products" id="steaks">
          <div className="anchor"></div>

          <Steaks />
        </div>

        <div className="home_products" id="drinks">
          <div className="anchor"></div>

          <Drinks />
        </div>

        <div className="home_products" id="desserts">
          <div className="anchor"></div>

          <Desserts />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
