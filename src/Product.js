import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Product({id,title, image, price,recipe}) {

  const  [{basket}, dispatch] = useStateValue();
  const addToBasket = () =>{

    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        recipe: recipe
      }
    })

  }

  return (
    <div className="product">
      <div className="product_image">
        <img 
          src={image}
          alt=""
        />
      </div>
      <div className="product_info">
        <p className="product_name accent-color">{title}</p>
      <small>
        {recipe}
      </small>
    
        <p className="product_price">
          <strong>${price}</strong>
        </p>
      <button className="accent-color-bg" onClick={addToBasket}>Add to Cart
        <span>
          <ShoppingCartIcon/>
        </span>
      </button>
      </div>
    </div>
  );
}

export default Product;
