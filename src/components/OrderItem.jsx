import React from "react";
import "../styles/order-item.scss";

const OrderItem = () => {
  return (
    <div className="order-item">
      <figure>
        <img
          src="https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522"
          alt="corgi plush"
        />
      </figure>
      <p>Corgi Plush</p>
      <p>$120,00</p>
      <img src="./icons/icon_close.png" alt="close" />
    </div>
  );
};

export { OrderItem };
