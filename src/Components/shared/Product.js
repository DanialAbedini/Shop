import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../contexts/CartContextProvider";
import { titleName , quantityCount , isInCart } from "../../helper/function";

import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";


const Product = ({product}) => {
  const {state,dispatch}= useContext(CartProvider);
  const { title, price, image,id } = product;
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={image} alt="shop" style={{ width: "200px" }} />
      <h1>{titleName(title)}</h1>
      <p>{price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${id}`}>Details</Link>
        <div className={styles.buttonContainer}>
        {quantityCount(state,id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>}
        {quantityCount(state, id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
        {quantityCount(state, id) > 0 && <span className={styles.counter}>{quantityCount(state,id)}</span>}
        {
          isInCart(state, id) ?
          <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: product})}>+</button> :
          <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add to Cart</button>
        }
        </div>
      </div>
    </div>
  );
};

export default Product;
