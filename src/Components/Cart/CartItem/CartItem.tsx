/* eslint-disable @typescript-eslint/no-explicit-any */
import './CartItem.css';

const CartItem = ({ item }: any) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
                <p>{item.title}</p>
                <p>$ {item.price}</p>
              <div className='cart-items-buttons'>
              <div className='cart-item-count'>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
             <div className='remove'>Remove</div>
              </div>
            </div>
        </div>
    );
}

export default CartItem