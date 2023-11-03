/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { toggleCartSide } from "../../../Services/toggleService.ts";
import { removeFromCart } from "../../../Services/cartService.ts";
import { removeFromWishlist } from "../../../Services/wishlist.ts";
import close from "../../../assets/close.png";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";
import CartItem from "../CartItem/CartItem.tsx";

const CartSidebar = () => {

  const toggleIt = useSelector((state: RootState) => state.toggle.toggle);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const continueShopping = () => {
    dispatch(toggleCartSide(!toggleIt));
    navigate(`/`);
  }

  const removeFromCart = () => {

  }

  const removeFromWishlist1 = () => {

  }

  return (
    <div className="sidebar">
      {
        cartItems.length >= 1 ? <>
          <div className="sidebar-header">
            <p>Your Cart</p>
            <img src={close} alt="Close Icon" onClick={continueShopping} />
          </div>
          {
            cartItems.map((item) => <CartItem item={item} />)
          }
          <div className="sub-total">
            <div className="sub-total-price">
              <p>SubTotal</p>
              <p>$ 1200</p>
            </div>
            <button className="check-out">Check Out</button>
          </div>
        </> : <div className="continue-shopping">
          <p>Your Cart is Empty</p>
          <button onClick={continueShopping}>Continue Shopping</button>
        </div>
      }
    </div>
  );
};


export default CartSidebar;
