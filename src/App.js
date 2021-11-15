import React from "react";
import ProductsContextProvider from "./contexts/ProductsContextProvider";

//! components 
import Products from "./Components/Products";
const App = () => {
  return <div>
    <ProductsContextProvider>
      <Products/>
    </ProductsContextProvider>
  </div>;
};

export default App;
