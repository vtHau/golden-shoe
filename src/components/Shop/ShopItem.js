import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../helpers/helpers";
import { addCart } from "./../../actions/action";

const findProductInCart = (cart, id) => {
  let index = false;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        index = true;
        break;
      }
    }
  }
  return index;
};

function ShopItem(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.carts);

  const handleClick = () => {
    console.log(product);
    const cart = { id: product.id, quantity: 1, product };
    dispatch(addCart(cart));
  };

  return (
    <div className="shop-item">
      <div
        className="shop-item-image"
        style={{ backgroundColor: product.color }}
      >
        <img src={product.image} />
      </div>
      <div className="shop-item-name">{product.name}</div>
      <div className="shop-item-description">{product.description}</div>
      <div className="shop-item-bottom">
        <div className="shop-item-price">{formatPrice(product.price)}</div>
        {findProductInCart(carts, product.id) ? (
          <div className="shop-item-button inactive">
            <div className="shop-item-button-cover">
              <div className="shop-item-button-cover-check-icon"></div>
            </div>
          </div>
        ) : (
          <div className="shop-item-button" onClick={handleClick}>
            <p>ADD TO CART</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopItem;
