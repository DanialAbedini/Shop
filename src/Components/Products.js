import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContextProvider";

import Product from "./shared/Product";

const Products = () => {
  const products = useContext(ProductsContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Products;
