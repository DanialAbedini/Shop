import React, { useContext } from "react";
import { CartProvider } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

// Style
import styles from "./ShopCart.module.css";

//!components
import Cart from "./shared/Cart";
const ShopCart = () => {
  const { state, dispatch } = useContext(CartProvider);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} product={item} />
        ))}
      </div>
      {state.totalCount > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items:</span> {state.totalCount}
          </p>
          <p>
            <span>Total Payments:</span> {state.totalPrice}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Check Out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.totalCount === 0 && (
        <div className={styles.complete}>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
