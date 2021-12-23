import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../actions/action";
import { formatPrice } from "../../helpers/helpers";
import trashIcon from "./../../assets/trash.png";

function CartIem(props) {
  const { cart } = props;
  const { product } = cart;
  const dispatch = useDispatch();

  const handleUpdate = (value) => {
    const newCart = { ...cart, quantity: cart.quantity + value };
    dispatch(updateCart(newCart));
  };

  const handleDelete = () => {
    dispatch(deleteCart(cart));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div
          className="cart-item-image"
          style={{ backgroundColor: product.color }}
        >
          <div className="cart-item-image-block">
            <img src={product.image} />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{product.name}</div>
        <div className="cart-item-price">{formatPrice(product.price)}</div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div
              className="cart-item-count-button"
              onClick={() => handleUpdate(-1)}
            >
              -
            </div>
            <div className="cart-item-count-number">{cart.quantity}</div>
            <div
              className="cart-item-count-button"
              onClick={() => handleUpdate(1)}
            >
              +
            </div>
          </div>
          <div className="cart-item-remove" onClick={handleDelete}>
            <img src={trashIcon} className="cart-item-remove-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartIem;
