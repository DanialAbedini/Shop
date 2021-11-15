import React, { useReducer } from "react";

export const CartProvider = React.createContext();

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  totalCount: 0,
  checkout: false,
};

const doit = (items) => {
  const totalCount = items.reduce(
    (total, product) => (total += product.quntity),
    0
  );
  const totalPrice = items.reduce(
    (total, product) => (total += product.quntity * product.price),
    0
  );

  return { totalCount, totalPrice };
};

const cartRuduce = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quntity: 1,
        });
      }
      return {
        ...state,
        checkout: false,
        selectedItems: [...state.selectedItems],
        ...doit(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        checkout: false,
        selectedItems: [...newSelectedItems],
        ...doit(state.selectedItems),
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quntity++;
      return {
        ...state,
        ...doit(state.selectedItems),
        checkout: false,
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quntity--;
      return {
        ...state,
        ...doit(state.selectedItems),
        checkout: false,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        totalPrice: 0,
        totalCount: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        totalPrice: 0,
        totalCount: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartRuduce, initialState);
  return (
    <CartProvider.Provider value={{ state, dispatch }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartContextProvider;
