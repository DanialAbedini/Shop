import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//! Components
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import ProductsDetails from "./Components/ProductsDetails";

//! components
import Products from "./Components/Products";
import CartContextProvider from "./contexts/CartContextProvider";
const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
