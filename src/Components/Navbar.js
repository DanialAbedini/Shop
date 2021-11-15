import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../contexts/CartContextProvider";

import shopIcon from "../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(CartProvider);
  return (
    <div>
      <div>
        <Link to="/shopcart">Products</Link>
        <div>
          <img src={shopIcon} alt="" />
          <span>{state.totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
