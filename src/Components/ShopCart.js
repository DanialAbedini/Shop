import React, { useContext } from "react";
import { CartProvider } from "../contexts/CartContextProvider";
import {Link} from "react-router-dom";
//!components
import Cart from "./shared/Cart";
const ShopCart = () => {
  const { state, dispatch } = useContext(CartProvider);
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} product={item} />
        ))}
      </div>
      {state.totalCount > 0 && (
        <div>
          <p>
            <span>Total Items:</span> {state.totalCount}
          </p>
          <p>
            <span>Total Payments:</span> {state.totalPrice}
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check Out
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.totalCount === 0 && (
        <div>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
