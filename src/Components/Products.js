import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContextProvider";

import Product from "./shared/Product";

// Style
import styles from "./Store.module.css";

const Products = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Products;
