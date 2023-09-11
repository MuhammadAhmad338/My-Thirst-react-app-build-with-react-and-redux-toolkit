import { useLocation } from "react-router-dom";
import { Product } from "../../../Interfaces/Product";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../Services/wishlist";
import { addToCart } from "../../../Services/cartService";
import { CartProduct } from "../../../Interfaces/cartItems";
import { WishlistProduct } from "../../../Interfaces/wishlistItems";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const wishlists = (item: Product) => {
    dispatch(addToWishlist(item as unknown as WishlistProduct));
  }

  const cart = (item: Product) => {
    dispatch(addToCart(item as unknown as CartProduct));
  }

  return (
    <div className="products">
      <div className="product-card">
        <div>{location.state.item.title}</div>
        <img
          src={location.state.item.image}
          alt="Product Card Image"
          height={300}
          width={300}
        />
        <div>{location.state.item.title}</div>
        <div>{location.state.item.description}</div>
        <div className="product-price">
          <div> $ {location.state.item.price}</div>
          <img src={location.state.item.img} alt="" width={25} height={25} onClick={() => wishlists(location.state.item)} />
          <button onClick={() => cart(location.state.item)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
