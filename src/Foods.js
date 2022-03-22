import React, { useEffect, useState } from "react";
import Product from "./Product";
import { db } from "./firebase";

function Specials() {
  const [specials, setSpecials] = useState([]);
  useEffect(() => {
    db.collection("special").onSnapshot((snapshot) => {
      setSpecials(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Special Food for this year!</h3>
      <div className="home_products_row">
        {specials.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe="This food is only for customers with coupon..."
          />
        ))}
      </div>
    </div>
  );
}

// Pizza
function Pizza() {
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    db.collection("pizza").onSnapshot((snapshot) => {
      setPizza(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Pizzas</h3>
      <div className="home_products_row">
        {pizza.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

// Burger
function Burger() {
  const [burger, setBurger] = useState([]);
  useEffect(() => {
    db.collection("burger").onSnapshot((snapshot) => {
      setBurger(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Burgers</h3>
      <div className="home_products_row">
        {burger.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

//Sushi
function Sushi() {
  const [sushi, setSushi] = useState([]);
  useEffect(() => {
    db.collection("sushi").onSnapshot((snapshot) => {
      setSushi(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Sushi</h3>
      <div className="home_products_row">
        {sushi.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

//Noodles
function Noodles() {
  const [noodles, setNoodles] = useState([]);
  useEffect(() => {
    db.collection("noodles").onSnapshot((snapshot) => {
      setNoodles(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Noodles</h3>
      <div className="home_products_row">
        {noodles.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

//Steaks
function Steaks() {
  const [steaks, setSteaks] = useState([]);
  useEffect(() => {
    db.collection("steaks").onSnapshot((snapshot) => {
      setSteaks(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Steaks</h3>
      <div className="home_products_row">
        {steaks.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

//Drinks
function Drinks() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    db.collection("drinks").onSnapshot((snapshot) => {
      setDrinks(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Drinks</h3>
      <div className="home_products_row">
        {drinks.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

//Desserts
function Desserts() {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    db.collection("desserts").onSnapshot((snapshot) => {
      setDesserts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  return (
    <div className="home_products_items">
      <h3 className="food_category">Desserts</h3>
      <div className="home_products_row">
        {desserts.map((post) => (
          <Product
            key={post.data.id}
            image={post.data.image}
            title={post.data.title}
            price={post.data.price}
            recipe={post.data.recipe}
          />
        ))}
      </div>
    </div>
  );
}

export { Pizza, Burger, Sushi, Steaks, Desserts, Noodles, Drinks, Specials};
