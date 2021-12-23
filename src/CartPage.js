import React from "react";
import items from "./cartData";

const CartPage = () => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <span>{item.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
