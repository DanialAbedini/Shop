import axios from "axios";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContextProvider";

// Style
import styles from "./ProductDetails.module.css";

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
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="ax" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          Category :<span>{category}</span>
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
