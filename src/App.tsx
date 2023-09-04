import React from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/products";
import Wishlist from "./Components/Wishlist/Wishlist";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
