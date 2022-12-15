import React from "react";
import { ProductItem } from "@components/ProductItem";
import "@styles/product-list.scss";

const ProductList = () => {
  return (
    <section className="main-container">
      <div className="product-list">
        <ProductItem />
      </div>
    </section>
  );
};

export { ProductList };
