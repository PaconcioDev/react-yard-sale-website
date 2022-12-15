import React from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/product-detail.scss";

import closeIcon from "@icons/icon_close.png"

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={closeIcon} alt="X" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export { ProductDetail };
