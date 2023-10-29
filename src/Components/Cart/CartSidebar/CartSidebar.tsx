/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import closeIcon from "../../../assets/close.png";
import { addToCart, removeFromCart } from "../../../Services/cartService";
import { CartProduct } from "../../../Interfaces/interfaces.ts";
import { toggleCartSide } from "../../../Services/toggleService.ts";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

const CartSidebar = ({ closeCart }: any) => {

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartSubtotal = useSelector((state: RootState) => state.cart.subtotal);
  const toggleIt = useSelector((state: RootState) => state.toggle.toggle);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemFromCart = (item: number) => {
    dispatch(removeFromCart(item));
  }
  const increaseQuantity = (item: CartProduct) => {
    dispatch(addToCart(item));
  }

  const decreaseQuantity = (id: number) => {
    dispatch(removeFromCart(id));
  }

  const continueShopping = () => {
    dispatch(toggleCartSide(!toggleIt));
    navigate(`/`);
  }

  return (
    <div id="cart-sidebar">  
  
        <div className="empty-cart-body">
          <div className="empty-cart-body-inner">
            <p className="empty-cart-text">Your cart is empty</p>
            <button type="button" id="checkout-button" onClick={continueShopping}>Continue Shopping</button>
          </div>
        </div>
    
    </div>
  );
};

export default CartSidebar;
