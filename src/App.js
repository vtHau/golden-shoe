import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

function App() {
  const carts = useSelector((state) => state.cartReducer.carts);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    function getTotalCost(carts) {
      return carts.reduce(
        (result, item) => item.quantity * item.product.price + result,
        0
      );
    }

    const totalPrice = getTotalCost(carts);
    setTotalPrice(totalPrice);
  }, [carts]);

  return (
    <>
      <Card title="Our Products">
        <Shop />
      </Card>
      <Card title="Your cart" showPrice price={totalPrice}>
        <Cart />
      </Card>
    </>
  );
}

export default App;
