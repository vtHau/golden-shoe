import React from "react";
import ShopItem from "./ShopItem";
import data from "./../../data/shoes.json";

const products = data.shoes;

function ShopList() {
  return (
    <div className="shop-items">
      {products.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ShopList;
