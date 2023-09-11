import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/drop-of-paint.png";
import img2 from "../../assets/love.png";
import img3 from "../../assets/search.png";
import img4 from "../../assets/shopping-bag.png";
import img5 from "../../assets/user.png";
import CartSidebar from "../Cart/CartSidebar/CartSidebar";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { searchCategory } from "../../Services/categoryService.ts";
import { Category } from "../../Interfaces/categoryInterface.ts";
import "./Header.css";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  const categoryDispatch = useAppDispatch();

  const toggleFunction = () => {
    setisOpen(!isOpen);
  };

  const filteredProducts = (query: string) => {
    categoryDispatch(searchCategory(query));
  };

  const toggle = () => {
    settoggleDropdown(!toggleDropdown);
  };

  const listOfCategories: Category[] = [
    { name: "electronics" },
    { name: "men's clothing" },
    { name: "jewelry" },
    { name: "women's clothing" },
  ];

  return (
    <>
      {isOpen && <CartSidebar closeCart={toggleFunction} />}
      <div className="header">
        <Link to="/" className="header-heading">
          <p>Thirst</p>
          <img src={img1} alt="" height={25} width={25} />
        </Link>
        <ul>
          <Link to="/" className="header-links">
            Home
          </Link>
          <li
            className="header-links"
            onMouseEnter={toggle}
          >
            Categories
          </li>
          <Link to="/" className="header-links">
            Contact
          </Link>
          <Link to="/" className="header-links">
            Services
          </Link>
        </ul>
        <div className="header-icons">
          <Link to="/search">
            <img src={img3} alt="" width={25} height={25} />
          </Link>
          <Link to="/account/login">
            <img src={img5} alt="" width={25} height={25} />
          </Link>
          <Link to="/wishlist">
            <img src={img2} alt="" width={30} height={30} />
          </Link>
          <img
            src={img4}
            alt=""
            onClick={toggleFunction}
            width={30}
            height={30}
          />
        </div>
      </div>
      {toggleDropdown &&
        <div className="dropdown">
          {listOfCategories.map((index) => (
            <ul key={index.name}>
              <Link  to="/products/category" onClick={() => filteredProducts(index.name)}>{index.name}</Link>
            </ul>
          ))}
        </div>
      }
    </>
  );
};

export default Header;
