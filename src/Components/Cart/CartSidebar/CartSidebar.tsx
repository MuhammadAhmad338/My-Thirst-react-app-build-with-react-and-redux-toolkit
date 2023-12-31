/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import closeIcon from "../../../assets/close.png";
import cancel from "../../../assets/cancel.png";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Services/cartService";
import "./CartSidebar.css";

const CartSidebar = ({ closeCart }: any) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const removeItemFromCart = (item: number) => {
    dispatch(removeFromCart(item));
  }

  const increaseQuantity = () => {
       console.log("Increase Quantity");
  }

  const decreaseQuantity = () => {
       console.log("Decrease Quantity!");  
  }

  return (
    <div className="cart-sideBar">
      {cartItems.length > 1 && (
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
      {cartItems.length > 1 ? (
        cartItems.map((item) => (
          <React.Fragment>
            <div className="cart-item-card">
              <div key={item.id} className="cart-item">
                <img src={item.image} alt="" width={100} height={100} />
                <div className="cartItem-info">
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
                </div>
                <p>${item.price}</p>
              </div>
              <div className="cart-item-buttons">
                <div className="cart-item-button">
                  <div className="cart-item-decrease" onClick={decreaseQuantity}>-</div>
                  <p>{item.quantity}</p>
                  <div className="cart-item-increase" onClick={increaseQuantity}>+</div>
                </div>
                <img src={cancel} onClick={() => removeItemFromCart(item.id)} alt="" width={25} height={25} />
              </div>
            </div>
          </React.Fragment>
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
            <h1>Your Cart is Empty</h1>
            <button>Continue Shopping</button>
          </div>
        </div>
      )}
      <div className="cart-subtotal">
        {cartItems.length > 1 && (
          <React.Fragment>
            <div className="cart-subtotal-price">
              <h2>SubTotal</h2>
              <p>$ 12000</p>
            </div>
            <div className="checkout-button">Check Out</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
