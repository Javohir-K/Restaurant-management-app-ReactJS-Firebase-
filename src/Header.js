import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import Logo from "./img/logo.png";
import { CheckoutMini } from "./components/Checkout/Checkout";
//Icons
import BurgerIcon from "./icons/burger.png";
import PizzaIcon from "./icons/pizza.png";
import DessertIcon from "./icons/dessert.png";
import DrinksIcon from "./icons/drinks.png";
import NoodleIcon from "./icons/noodle.png";
import SteakIcon from "./icons/steak.png";
import SushiIcon from "./icons/sushi.png";
import Subtotal from "./Subtotal";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link  to="/">
        <img className="header_logo" src={Logo} alt="" />
      </Link>
      <div className="header_links">
        <ul>
          <li>
            <Link to="/burger">
              <img src={BurgerIcon} alt="" />
              Burger
            </Link>
          </li>
          <li>
            <Link to="/pizza">
              <img src={PizzaIcon} alt="" />
              Pizza
            </Link>
          </li>
          <li>
            <Link to="/sushi">
              <img src={SushiIcon} alt="" />
              Sushi
            </Link>
          </li>
          <li>
            <Link to="/noodles">
              <img src={NoodleIcon} alt="" />
              Noodles
            </Link>
          </li>
          <li>
            <Link to="/steaks">
              <img src={SteakIcon} alt="" />
              Steaks
            </Link>
          </li>
          <li>
            <Link to="/drinks">
              <img src={DrinksIcon} alt="" />
              Drinks
            </Link>
          </li>
          <li>
            <Link to="/desserts">
              <img src={DessertIcon} alt="" />
              Desserts
            </Link>
          </li>
        </ul>
      </div>
      <div className="header_nav">
      <div className="header_cart_area">
          <Link to="/checkout" className="cart_show_number">
            <div className="header_optionBasket">
              <ShoppingBasket />
              <span className="header_option_LineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        <div className="header_cart_mini">
          <CheckoutMini/>
          <div className="checkout_mini_link">
          <Subtotal/>
          <Link to="/checkout" >
                View Cart
          </Link>
          </div>

        </div>
        </div>
      
        {/* <div className="header_option">
          <span className="header_option_LineOne">Returns</span>
          <span className="header_option_LineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_LineOne">Your</span>
          <span className="header_option_LineTwo">Prime</span>
        </div> */}
            {/* <span className="header_option_LineOne">Hello, {!user ? 'Guest' : user.email}</span> */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option signOutBtn">
            <span className="header_option_LineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
