import React from "react";
import "@styles/product-info.scss";

import addToCartIcon from "@icons/bt_add_to_cart.svg"

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522"
        alt="corgi plush"
      />
      <div className="product-info">
        <p>$120,00</p>
        <p>Corgi Plush</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          dolores, non vero aspernatur sequi fugiat, aliquam consequatur,
          numquam necessitatibus ipsum doloribus quidem earum impedit tempora
          consectetur repudiandae! Eveniet, odio magni.
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={addToCartIcon} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export { ProductInfo };
