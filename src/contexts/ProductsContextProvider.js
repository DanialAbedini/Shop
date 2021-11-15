import React, { useEffect, useState, createContext } from "react";
import { getProducts } from "../apis/api";

const ProductsContext = createContext();

const ProductsContextProvider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
        setProducts(await getProducts());
    };
    FetchAPI();
  }, []);
  console.log(products);
  return <div></div>;
};

export default ProductsContextProvider;
