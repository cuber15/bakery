import React from "react";
import bake from "../../assets/images/bakegif.gif"

export const Thankyou = () => {
  return (
    <div className="container">
      <h1 className="cart">Thank You for Ordering from Us!</h1>
      <p className="msg">Hang Tight! Your Happiness is being baked!</p>
      <div className="animation-bake">
        <img className="bake" src={bake}/>
      </div>
    </div>
  );
};