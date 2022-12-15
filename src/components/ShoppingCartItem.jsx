import React from "react";
import "@styles/shopping-cart-item.scss";

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart-item">
      <figure>
        <img
          src="https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522"
          alt="Corgi Plush"
        />
      </figure>
      <p>Corgi Plush</p>
      <p>$120,00</p>
    </div>
  );
};

export { ShoppingCartItem };
