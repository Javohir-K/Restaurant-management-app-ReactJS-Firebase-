import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ScrollButton from "./ScrollButton";
import Footer from "./Footer";
import Payment from "./components/Payment/Payment";
import {
  Burger,
  Desserts,
  Drinks,
  Noodles,
  Pizza,
  Steaks,
  Sushi,
} from "./Foods";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51KbXZcGHy5UrRDBMKQJKbEEp8U7r8RECFeCB0DD72QqFwpEBXLnH5Bq5BrE18jE5p3Cow2jwmkb6MVdGX2eyR5oY00lcOiTCqJ")

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app bg-color">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/burger">
            <div className="foods_tab">
              <Burger />
            </div>
          </Route>
          <Route path="/pizza">
            <div className="foods_tab">
              <Pizza />
            </div>
          </Route>
          <Route path="/sushi">
            <div className="foods_tab">
              <Sushi />
            </div>
          </Route>
          <Route path="/noodles">
            <div className="foods_tab">
              <Noodles />
            </div>
          </Route>
          <Route path="/steaks">
            <div className="foods_tab">
              <Steaks />
            </div>
          </Route>
          <Route path="/desserts">
            <div className="foods_tab">
              <Desserts />
            </div>
          </Route>
          <Route path="/drinks">
            <div className="foods_tab">
              <Drinks />
            </div>
          </Route>
        </Switch>
        <Footer />
        <ScrollButton />
      </div>
    </Router>
  );
}

export default App;
