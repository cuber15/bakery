import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, name, description, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> {description} </p>
        <p> ₹{price}</p>
      </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
             Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
    </div>
  );
};
