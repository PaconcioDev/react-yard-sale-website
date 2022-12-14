import React from "react";
import "../styles/shopping-cart-item.scss";

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart-item">
      <figure>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Corgi Plush"
        />
      </figure>
      <p>Corgi Plush</p>
      <p>$120,00</p>
    </div>
  );
};

export { ShoppingCartItem };
