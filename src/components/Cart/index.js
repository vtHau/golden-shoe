import React from "react";
import { useSelector } from "react-redux";
import CartIem from "./CartIem";

function CartList(props) {
  const carts = useSelector((state) => state.cartReducer.carts);

  return (
    <div className="cart-items">
      <div>
        {!carts.length && (
          <div className="cart-empty">
            <p className="cart-empty-text">Your cart is empty.</p>
          </div>
        )}

        {carts.map((cart, index) => (
          <CartIem key={index} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default CartList;
