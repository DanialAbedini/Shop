import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../contexts/CartContextProvider";

// Style
import styles from "./Navbar.module.css";

import shopIcon from "../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(CartProvider);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">Products</Link>
        <div className={styles.iconContainer}>
          <Link to="/shopcart"><img src={shopIcon} alt="" /></Link>
          <span>{state.totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
