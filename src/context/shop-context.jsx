import { createContext, useCallback, useEffect, useState } from "react";
import { PRODUCTS } from "../assets/product";

export const  ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItemObject, setCartItemObject] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCount += cartItems[item];
      }
    }
    return totalCount;
  }

  const addToCart = (itemId) => {
    setCartItemObject((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: (prevCartItems[itemId] || 0) + 1, }));
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItemObject((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }});
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = useCallback(() => {
    let currentItemsInCart = [];
    PRODUCTS.map(produt => {
      for (const key in cartItemObject) {
        if(produt.id == key){
          const currentItem = {Name : produt.name, UnitPrice : produt.price, Quantity : cartItemObject[key], TotalPrice : produt.price * cartItemObject[key]}
          currentItemsInCart.push(currentItem);
        }
      }
    })
    console.log('CART ITEM ::',currentItemsInCart);
    setCartItems(getDefaultCart());
  },[cartItemObject]);

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getTotalCartCount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
