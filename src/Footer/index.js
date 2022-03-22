import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import LogoImg from "../img/logo.png";
import PhoneImg from "./img/telephone.png";
import FbLogo from "./img/facebook.png";
import InLogo from "./img/instagram.png";
import TwLogo from "./img/twitter.png";

function index() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-top-left">
            <img src={LogoImg} alt="" />
            <div className="contact-phone">
              <img src={PhoneImg} alt="" />
              <p>1-800-312-2121</p>
            </div>
            <div className="address">
              <p>
                555 California str, Suite 100 <br />
                San Francisco, CA 94107
              </p>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-menu">
              <p>Our Menu</p>
              <Link to="/pizza">Pizza</Link>
              <Link to="/burgers">Burgers</Link>
              <Link to="/sushi">Sushi</Link>
              <Link to="/steaks">Steaks</Link>
              <Link to="/drinks">Drinks</Link>
            </div>
            <div className="footer-contract">
              <p>How can we help</p>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms and conditions</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-social-w">
        <p>Find us on Social media</p>
    <div className="footer-social">

              <a href="/">
                <img src={FbLogo} alt="" />
              </a>
              <a href="/">
                <img src={InLogo} alt="" />
              </a>
              <a href="/">
                <img src={TwLogo} alt="" />
              </a>
    </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2021 Foodz. Made by Javohir-K</p>
      </div>
    </div>
  );
}

export default index;
