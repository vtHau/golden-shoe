const data = JSON.parse(localStorage.getItem("CART")) || [];

const initialState = {
  carts: data,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const carts = [...state.carts];
      const cart = action.payload;
      carts.push(cart);

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    case "UPDATE_CART": {
      let index = -1;
      const carts = [...state.carts];
      const { quantity, id } = action.payload;

      index = findProductInCart(carts, id);
      if (index !== -1) {
        if (quantity === 0) {
          carts.splice(index, 1);
        } else {
          carts[index].quantity = quantity;
        }
      }

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    case "DELETE_CART": {
      let index = -1;
      const carts = [...state.carts];
      const { id } = action.payload;

      index = findProductInCart(carts, id);

      if (index !== -1) {
        carts.splice(index, 1);
      }

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    default:
      return state;
  }
};

const findProductInCart = (cart, id) => {
  let index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cartReducer;
