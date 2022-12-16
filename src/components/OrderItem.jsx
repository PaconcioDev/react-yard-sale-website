import React from "react";
import { AppContext } from "@context/AppContext";
import "@styles/order-item.scss";

import closeIcon from "@icons/icon_close.png";

const OrderItem = ({ item }) => {
  const { removeFromCart } = React.useContext(AppContext);
  const handleRemove = item => {
    removeFromCart(item)
  }

  return (
    <div className="order-item">
      <figure>
        <img src={item.images[0]} alt={item.title} />
      </figure>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <img src={closeIcon} alt="close" onClick={() => handleRemove(item)}/>
    </div>
  );
};

export { OrderItem };
