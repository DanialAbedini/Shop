import React,{useContext} from 'react';
import { CartProvider } from '../../contexts/CartContextProvider';
import {titleName,quantityCount,isInCart} from "../../helper/function";

import trashIcon from "../../assets/icons/trash.svg";

const Cart = ({product}) => {
    const {state,dispatch}=useContext(CartProvider);
    const {image,title,price,quntity,id}=product;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{titleName(title)}</h1>
                <p>{price}$</p>
            </div>
            <div>
                <span>{quntity}</span>
            </div>
        {quantityCount(state,id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>}
        {quantityCount(state, id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>}
        {<span>{quantityCount(state,id)}</span>}
        {
          isInCart(state, id) &&
          <button onClick={() => dispatch({type:"INCREASE", payload: product})}>+</button> 
        }
        </div>
    );
};

export default Cart;