import { createBrowserRouter } from "react-router-dom";
import Products from "../Components/Products/products";
import Error from "../pages/error";
import Search from "../Components/Search/Search";
import Wishlist from "../Components/Wishlist/Wishlist";
import Cart from "../Components/Cart/Cart";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Signup from "../Components/Signup/Signup";
import Category from "../Components/Category/Category";
import SingleProduct from "../Components/Products/SingleProduct/SingleProduct";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Signin from "../Components/Signin/Signin";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* Add Header */}
        <Products />
        <Footer /> {/* Add Footer */}
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "wishlist",
    element: (
      <>
        <Header />
        <Wishlist />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "search",
    element: (
      <>
        <Header /> {/* Add Header */}
        <Search />
        <Footer /> {/* Add Footer */}
      </>
    ),
    errorElement: <Error />
  },

  {
    path: "cart",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "account/register",
    element: (
      <>
        <Header />
        <Signup />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "account/login",
    element: (
      <>
        <Header />
        <Signin />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "products/productByCategory",
    element: (
      <>
        <Header />
        <Category />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "product/:id",
    element: (
      <>
        <Header />
        <SingleProduct />
        <Footer />
      </>
    ),
    errorElement: <Error />
  },
]);
