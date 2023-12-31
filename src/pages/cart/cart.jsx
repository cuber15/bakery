import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../assets/product"
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import emptycart from "../../assets/images/emptyCart.gif"

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="">Your Cart Items</h1>
        <hr className="dashed"/>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Total Price : ₹{totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/thankyou");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <>
        <h1> Your Shopping Cart is Empty</h1>
        <img className="bake" src={emptycart}/>
        </>
      )}
    </div>
  );
};
