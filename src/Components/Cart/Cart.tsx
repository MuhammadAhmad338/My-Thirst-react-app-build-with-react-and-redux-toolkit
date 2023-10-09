import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../Services/cartService";
import { RootState } from "../../Store/store";
import React from "react";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const removeformcart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const clearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      {!cartItems.length && (
        <div className="empty-cart">No Items in the Cart!</div>
      )}
      {cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <img src={item.image} alt="" height={200} width={200} />
          <p>{item.title}</p>
          <p>$ {item.price}</p>
          <p>Quantity {item.quantity}</p>
          <button onClick={() => removeformcart(item.id)}>
            REMOVE FROM CART
          </button>
          <button onClick={clearcart}>CLEAR CART</button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
