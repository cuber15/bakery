import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Cake } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {

  const { getTotalCartCount } = useContext(ShopContext);
  const totalCartItemCount = getTotalCartCount();

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="logo"> Bakery <Cake size={32} /> </Link>
        <Link to="/cart" className="icon-container">
          <ShoppingCart size={32} />
          <div className="badge">{totalCartItemCount}</div>
        </Link>
      </div>
    </div>
  );
};
