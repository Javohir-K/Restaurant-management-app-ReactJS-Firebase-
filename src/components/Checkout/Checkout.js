import React from "react";
import "./Checkout.css";
import Subtotal from "../../Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../CheckoutProduct";
import EmptyCartImage from "../../img/cartEmpty.png";
import { Link } from "react-router-dom";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_top">
        <div>
          <h4 className="checkout_title">
            <h4>Hello, {user?.email}</h4>
            This is your shopping cart
          </h4>
        </div>

        <Subtotal />
      </div>
      <div className="checkout_bottom">
        {basket?.length ? (
          basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              recipe={item.recipe}
            />
          ))
        ) : (
          <div className="empty_cart">
            <p>Your Cart is empty</p>
            <img src={EmptyCartImage} alt="" />
            <Link to="/">Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckoutMini() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout_mini">
      {basket?.length ? (
        basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            recipe={item.recipe}
          />
        ))
      ) : (
        <div className="empty_cart">
          <p>Your Cart is empty</p>
          <img src={EmptyCartImage} alt="" />
          <Link to="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}

export { CheckoutMini };
export default Checkout;
