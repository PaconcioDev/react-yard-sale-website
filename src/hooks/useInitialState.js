import React from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, {...payload, idCart: state.cart.length + 1}],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(product => product.idCart != payload.idCart)
    });
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export { useInitialState };
