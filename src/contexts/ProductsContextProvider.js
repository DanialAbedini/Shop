import React, { useEffect, useState, createContext } from "react";
import { getProducts } from "../apis/api";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      setProducts(await getProducts());
    };
    FetchAPI();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
