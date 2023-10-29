import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../Services/wishlist";
import { addToCart } from "../../../Services/cartService";
import { CartProduct, WishlistProduct, Product } from "../../../Interfaces/interfaces";
import Reviews from "../../Reviews/Reviews";
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
    <>
      <div className="single-product">
        <div className="single-product-card">
          <img
            src={location.state.item.image}
            alt="Product Card Image"
            height={300}
            width={300}
          />
        </div>
        <div className="product-details">
        <h3>Title</h3>
          <div>{location.state.item.title}</div>
          <h3>Description</h3>
          <div>{location.state.item.description}</div>
          <div className="product-price">
            <div> $ {location.state.item.price}</div>
          </div>
          <div className="add-to-cart-button" onClick={() => cart(location.state.item)}>
            ADD TO CART
          </div>
          <div className="add-to-wishlist-button" onClick={() => wishlists(location.state.item)}>
            ADD TO WISHLIST
          </div>
        </div>
      </div>
      <Reviews productid={location.state.item.id} />
    </>
  );
}

export default SingleProduct;
