/* eslint-disable @typescript-eslint/no-explicit-any */
import './CartItem.css';

const CartItem = ({ item }: any) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        </div>
    );
}

export default CartItem