/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { toggleCartSide } from "../../../Services/toggleService.ts";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem.tsx";
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

  return (
    <div id="cart-sidebar">

      {cartItems.length > 0 ? <div className="cart-items">
        <div className="cart-header">
          Cart Header
        </div>
        <CartItem />
        <div className="cart-subtotal">

        </div>
      </div> : <div className="empty-cart-body">
        <div className="empty-cart-body-inner">
          <p className="empty-cart-text">Your cart is empty</p>
          <button type="button" id="checkout-button" onClick={continueShopping}>Continue Shopping</button>
        </div>
      </div>
      }

    </div>
  );
};

export default CartSidebar;
