import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../contexts/CartContextProvider";
import { titleName , quantityCount , isInCart } from "../../helper/function";

import trashIcon from "../../assets/icons/trash.svg";

const Product = ({product}) => {
  const {state,dispatch}= useContext(CartProvider);
  const { title, price, image,id } = product;
  return (
    <div>
      <img src={image} alt="shop" style={{ width: "200px" }} />
      <h1>{titleName(title)}</h1>
      <p>{price} $</p>
      <div>
        <Link to={`/products/${id}`}>Details</Link>
        {quantityCount(state,id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>}
        {quantityCount(state, id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
        {<span>{quantityCount(state,id)}</span>}
        {
          isInCart(state, id) ?
          <button onClick={() => dispatch({type:"INCREASE", payload: product})}>+</button> :
          <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add to Cart</button>
        }
      </div>
    </div>
  );
};

export default Product;
