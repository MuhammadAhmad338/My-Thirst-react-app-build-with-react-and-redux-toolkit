
import { Link } from "react-router-dom";
import img1 from "../../assets/drop-of-paint.png";
import img2 from "../../assets/love.png";
import img3 from "../../assets/search.png";
import img4 from "../../assets/shopping-bag.png";
import img5 from "../../assets/user.png";
import CartSidebar from "../Cart/CartSidebar/CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store.ts";
import { toggleCartSide } from '../../Services/toggleService.ts';
import { toggleSearch } from '../../Services/toggleSearchService.ts';
import TopSearchContainer from "../Search/TopSearch/TopSearch.tsx";
import { Category } from "../../Interfaces/categoryInterface.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { searchByCategory } from "../../Services/searchService.ts";
import "./Header.css";


const Header = () => {

  const toggleCart = useSelector((item: RootState) => item.toggle.toggle);
  const toggleSearchIcon = useSelector((item: RootState) => item.toggleSearch.searchTheToggle);
  
  const categoryDispatch = useAppDispatch();
  const dispatch = useDispatch();

  const toggleSideCart = () => {
    dispatch(toggleCartSide(!toggleCart));
  }

  const toggleSearchIcons = () => {
    dispatch(toggleSearch(!toggleSearchIcon));
  }

  const searchByCategories = (item: string) => {
    categoryDispatch(searchByCategory(item));

  }

  // const filteredProducts = (query: string) => {
  //   categoryDispatch(searchCategory(query));
  // }

  const listOfCategories: Category[] = [
    { name: "electronics" },
    { name: "men's clothing" },
    { name: "jewelry" },
    { name: "women's clothing" },
  ];

  return (
    <>
      {toggleCart && <CartSidebar closeCart={toggleSideCart} />}
      {toggleSearchIcon && <div className="search-container">
        <TopSearchContainer />
      </div>}
      <div className="header">
        <Link to="/" className="header-heading">
          <p>Thirst</p>
          <img src={img1} alt="" height={25} width={25} />
        </Link>
        <ul>
          <Link to="/" className="header-links">
            Home
          </Link>
          <div className="dropdown">
            <li className="dropdown-toggle">Categories</li>
            <div className="dropdown-menu">
              {listOfCategories.map((item) => (
                <Link
                  key={item.name}
                  to="/products/productByCategory"
                  onClick={() => searchByCategories(item.name)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/" className="header-links">
            Contact
          </Link>
          <Link to="/" className="header-links">
            Services
          </Link>

        </ul>
        <div className="header-icons">

          <img onClick={toggleSearchIcons} src={img3} alt="" width={25} height={25} />

          <Link to="/account/login">
            <img src={img5} alt="" width={25} height={25} />
          </Link>
          <Link to="/wishlist">
            <img src={img2} alt="" width={30} height={30} />
          </Link>
          <img
            src={img4}
            alt=""
            onClick={toggleSideCart}
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
