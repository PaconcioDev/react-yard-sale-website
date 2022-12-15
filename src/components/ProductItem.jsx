import React from "react";
import "@styles/product-item.scss";

import addToCartIcon from "@icons/bt_add_to_cart.svg"

const ProductItem = () => {
  return (
    <div className="product-item">
      <img
        src="https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Corgi Plush</p>
        </div>
        <figure>
          <img src={addToCartIcon} alt="+" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
