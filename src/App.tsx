import React from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/products";
import Wishlist from "./Components/Wishlist/Wishlist";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Category from "./Components/Category/Category.tsx";
import SingleProduct from "./Components/Products/SingleProduct/SingleProduct.tsx";
import SearchProducts from "./Components/Products/SearchProduct/searchProducts.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact.tsx";
import About from "./Components/About/About.tsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account/register" element={<Signup />} />
          <Route path="/account/login" element={<Signin />} />
          <Route path="/products/productByCategory" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
