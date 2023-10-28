/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store.ts";
import { toggleCartSide } from '../../Services/toggleService.ts';
import { toggleSearch } from '../../Services/toggleSearchService.ts';
import { About, Category } from "../../Interfaces/interfaces.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { searchByCategory } from "../../Services/searchService.ts";
import img from "../../assets/right-arrow.png";
import wishlistImage from "../../assets/love.png";
import shoppingBag from "../../assets/shopping-bag.png";
import brandImage from "../../assets/shoppingbackground.png";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CartSidebar from "../Cart/CartSidebar/CartSidebar.tsx";

const Header = () => {

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleCart = useSelector((item: RootState) => item.toggle.toggle);
  const toggleSearchIcon = useSelector((item: RootState) => item.toggleSearch.searchTheToggle);
  const cartCount = useSelector((item: RootState) => item.cart.items.length);
  const wishlistCount = useSelector((item: RootState) => item.wishlist.items.length);

  const categoryDispatch = useAppDispatch();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  }

  const toggleSideCart = () => {
    console.log("Hello World!");
    dispatch(toggleCartSide(!toggleCart));
  }

  const toggleSearchIcons = () => {
    dispatch(toggleSearch(!toggleSearchIcon));
  }

  const searchByCategories = (item: string) => {
    categoryDispatch(searchByCategory(item));
  }

  const listOfCategories: Category[] = [
    { name: "Electronics" },
    { name: "Men's clothing" },
    { name: "Jewelry" },
    { name: "Women's clothing" },
  ];

  const aboutUsCategories: About[] = [
    { name: "About" },
    { name: "Our Story" },
    { name: "Vision and Mission" }
  ]

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      {!isOpen ? 
      <i className="menu-icon" onClick={toggleMenu}>☰</i> : 
      <i className="menu-icon" onClick={toggleMenu}>x</i>}
      {toggleCart && <CartSidebar closeCart={toggleSideCart}/>}
      <img src={brandImage} alt="Thirst Image" width={50} height={50} />
      <div>
        <img src={wishlistImage} className="wishlistImage" alt="" width={30} height={30} />
        <span className="wishlistCount">{wishlistCount}</span>
        <img src={shoppingBag} alt="" className="shoppingbag" width={30} height={30} onClick={toggleSideCart} />
        <span className="shoppingbagCount">{cartCount}</span>
      </div>
      {isOpen && <nav className="nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <img src={img} alt="Arrow Image" />
          </li>
          <li>
            <Link to={"/"}>Categories</Link>
            <img src={img} alt="Arrow Image" />
          </li>

          <li>
            <Link to={"/contact"}>Contact</Link>
            <img src={img} alt="Arrow Image" />
          </li>
          <li>
            <Link to={"/about"}>About</Link>
            <img src={img} alt="Arrow Image" />
          </li>
        </ul>
      </nav>}
    </header>
  );
};





export default Header;
