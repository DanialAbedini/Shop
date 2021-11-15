import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../contexts/CartContextProvider";

import shopIcon from "../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(CartProvider);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/shopcart"><img src={shopIcon} alt="" /></Link>
          <span>{state.totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
