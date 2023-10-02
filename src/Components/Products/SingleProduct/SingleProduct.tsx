import { useLocation } from "react-router-dom";
import { Product } from "../../../Interfaces/Product";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../Services/wishlist";
import { addToCart } from "../../../Services/cartService";
import { CartProduct } from "../../../Interfaces/cartItems";
import Rating from "../../Rating/Rating";
import { WishlistProduct } from "../../../Interfaces/wishlistItems";
import Comments from "../../Comments/Comments";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { getCommentsByProducts } from "../../../Services/commentService";
import { RootState } from "../../../Store/store";
import "./SingleProduct.css";


const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const comments = useSelector((item: RootState) => item.comment.data);

  const wishlists = (item: Product) => {
    dispatch(addToWishlist(item as unknown as WishlistProduct));
  }

  const cart = (item: Product) => {
    console.log(item);
    dispatch(addToCart(item as unknown as CartProduct));
  }

  useEffect(() => {
    appDispatch(getCommentsByProducts(location.state.item.id));
  }, [appDispatch, location.state.item.id,]);

  return (
    <>
      <div className="products">
        <div className="product-card">
          <img
            src={location.state.item.image}
            alt="Product Card Image"
            height={300}
            width={300}
          />

        </div>
        <div className="product-details">
          <div>{location.state.item.title}</div>
          <div>{location.state.item.description}</div>
          <div className="product-price">
            <div> $ {location.state.item.price}</div>
          </div>
          <Rating />
          <div className="add-to-cart-button" onClick={() => cart(location.state.item)}>
            ADD TO CART
          </div>
          <div className="add-to-wishlist-button" onClick={() => wishlists(location.state.item)}>
            ADD TO WISHLIST
          </div>
        </div>
      </div>
      <Comments comments={comments}/>
    </>
  );
}

export default SingleProduct;
