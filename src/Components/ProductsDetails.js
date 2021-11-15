import axios from "axios";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContextProvider";
const ProductsDetails = () => {
  const prod = useContext(ProductsContext);
  const { id } = useParams();
  const data =
    prod[id - 1] ??
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((respone) => respone.data);

  const { title, price, image, description, category } = data;

  return (
    <div>
      <img src={image} alt="ax" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          Category :<span>{category}</span>
        </p>
        <div>
          <button>{price} $</button>
          <button>
            <Link to="/products">Back to Shop</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
