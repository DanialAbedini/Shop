import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";

//! Components
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import ProductsDetails from "./Components/ProductsDetails";

//! components 
import Products from "./Components/Products";
const App = () => {
  return <div>
    <ProductsContextProvider>
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductsDetails/>}/>
        <Route path="*" element={<Navigate to={<Products/>}/>}/>
      </Routes>
    </ProductsContextProvider>
  </div>;
};

export default App;
