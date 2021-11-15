import React from "react";
import { titleName } from "../../helper/function";
const Product = (props) => {
  const { title, price, image } = props.product;
  return (
    <div>
      <img src={image} alt="shop" style={{width:"200px"}} />
      <h1>{titleName(title)}</h1>
      <p>{price} $</p>
      <div>
        <a href="##">Details</a>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
