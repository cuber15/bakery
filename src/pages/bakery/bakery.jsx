import React from "react";
import { PRODUCTS } from '../../assets/product';
import { Product } from "./product";
import "./bakery.css";

export const Bakery = () => {
  return (
    <div className="bakery">
      <div className="bakeryTitle">
        <h1>Welcome to our Bakery</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};