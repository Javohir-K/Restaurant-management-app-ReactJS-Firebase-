import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";


function CheckoutProduct({ id, title, image, price,recipe }) {
  const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="chkProduct_info">
          <div>

        <p className="checktitle">{title}</p>
        <p className="checkrecipe">
          <small>
            {recipe}
          </small>
        </p>
        <p>
          <small>$ </small>
          <strong>{price}</strong>
        </p>
          </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
