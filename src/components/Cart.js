import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import items from "../cartData";


const Cart = () => {
  return (
    <div className="cart-container">
      <div>Cart</div>
      <AiOutlineShoppingCart className="cart-icon" />
      <span>{items.length}</span>
    </div>
  );
};

export default Cart;
