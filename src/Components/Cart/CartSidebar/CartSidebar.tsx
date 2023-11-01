/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { toggleCartSide } from "../../../Services/toggleService.ts";
import { removeFromCart } from "../../../Services/cartService.ts";
import { removeFromWishlist } from "../../../Services/wishlist.ts";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

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
    <div className="cart-sidebar">
    <div className="cart-header">
      <h2>My Cart</h2>
      <button type="button" className="close-cart-sidebar">
        X
      </button>
    </div>
    <ul className="cart-items">
      {cartItems.map((cartItem) => (
        <li key={cartItem.id}>
          <img src={cartItem.image} alt={cartItem.title} width={100} height={100} />
          <div className="cart-item-info">
            <h4>{cartItem.title}</h4>
            <p>{cartItem.price}</p>
            <button type="button" className="remove-from-cart">
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
    <div className="cart-footer">
      <p>Total: ${cartItems.reduce((total, cartItem) => total + cartItem.price, 0)}</p>
      <button type="button" className="checkout-button">
        Checkout
      </button>
    </div>
  </div>
   
  );
};


export default CartSidebar;
