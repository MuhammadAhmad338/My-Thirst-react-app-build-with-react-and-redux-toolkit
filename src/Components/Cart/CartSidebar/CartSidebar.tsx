/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../../Store/store";
import closeIcon from "../../../assets/close.png";
import cancel from "../../../assets/cancel.png";
import {addToCart, removeFromCart} from "../../../Services/cartService";
import { CartProduct } from "../../../Interfaces/interfaces.ts";
import { toggleCartSide  } from "../../../Services/toggleService.ts";
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
    <div className="cart-sideBar">
      {cartItems.length >= 1 && (
        <React.Fragment>
          <div className="cart-header">
            <h2>Your Cart</h2>
            <img
              src={closeIcon}
              alt=""
              width={22}
              height={22}
              onClick={closeCart}
            />
          </div>
          <div className="cart-header-body">
            <p>Product</p>
            <p>Total</p>
          </div>
        </React.Fragment>
      )}
      {cartItems.length >= 1 ? (
        cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div  className="cart-item">
                <img src={item.image} alt="Cart Image" width={150} height={100} />
                <div className="cartItem-info">
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
                </div>
                <p>${item.price}</p>
              </div>
              <div className="cart-item-buttons">
                <div className="cart-item-button">
                  <div className="cart-item-decrease" onClick={() => decreaseQuantity(item.id)}>-</div>
                  <p>{item.quantity}</p>
                  <div className="cart-item-increase" onClick={() => increaseQuantity(item)}>+</div>
                </div>
                <img src={cancel} onClick={() => removeItemFromCart(item.id)} alt="" width={25} height={25} />
              </div>
            </div>
        ))
      ) : (
        <div className="cart-is-empty">
          <div className="empty-cardheader">
            <img
              src={closeIcon}
              alt=""
              height={25}
              width={25}
              onClick={closeCart}
            />
          </div>
          <div className="empty-cart-body">
           <p className="empty-cart-text">Your cart is empty</p>
            <button className="empty-cart-body-button" onClick={continueShopping}>Continue Shopping</button>
          </div>
        </div>
      )}
      <div className="cart-subtotal">
        {cartItems.length >= 1 && (
          <React.Fragment>
            <div className="cart-subtotal-price">
              <h2>SubTotal</h2>
              <p>$ {cartSubtotal}</p>
            </div>
            <div className="checkout-button">Check Out</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
