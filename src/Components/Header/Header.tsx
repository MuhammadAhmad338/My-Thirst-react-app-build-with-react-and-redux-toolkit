/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store.ts";
import { toggleCartSide } from '../../Services/toggleService.ts';
import img from "../../assets/right-arrow.png";
import wishlistImage from "../../assets/love.png";
import shoppingBag from "../../assets/shopping-bag.png";
import brandImage from "../../assets/shoppingbackground.png";
import CartSidebar from "../Cart/CartSidebar/CartSidebar.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [about, setOpen] = useState(false);

  const toggleCart = useSelector((item: RootState) => item.toggle.toggle);
  const cartCount = useSelector((item: RootState) => item.cart.items.length);
  const wishlistCount = useSelector((item: RootState) => item.wishlist.items.length);

  const dispatch = useDispatch();


  const toggleSideCart = () => {
    dispatch(toggleCartSide(!toggleCart));
  }

  const toggleAboutSection = () => {
    setOpen(!about);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
    {toggleCart && <CartSidebar/>}
    <header className="header">
      {!isOpen ?
        <i className="menu-icon" onClick={toggleMenu}>☰</i> :
        <i className="menu-icon" onClick={toggleMenu}>x</i>}
     
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
          <li className="about-section" onClick={toggleAboutSection}>
            <div>About</div>
            {about ? <p>-</p> : <p>+</p>}
          </li>
        </ul>
        {
          about && <ul className="about-list">
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/pages/our-story'}>Our Story</Link></li>
            <li><Link to={'/pages/our-mission'}>Vision and Mission</Link></li>
          </ul>
        }
      </nav>}
    </header>
    </>
    
  );
};

export default Header;
