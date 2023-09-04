import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-heading">
        <p>Thirst</p>
          <img
            src="src/assets/drop-of-paint.png"
            alt=""
            height={25}
            width={25}
          />
      </Link>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className="header-icons">
        <Link to="/search">
          <img src="src/assets/search.png" alt="" width={25} height={25} />
        </Link>
        <Link to="/account">
          <img src="src/assets/user.png" alt="" width={25} height={25} />
        </Link>
        <Link to="/wishlist">
          <img src="src/assets/love.png" alt="" width={30} height={30} />
        </Link>
        <Link to="/cart">
          <img
            src="src/assets/shopping-bag.png"
            alt=""
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
