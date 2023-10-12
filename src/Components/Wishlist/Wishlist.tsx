import "./Wishlist.css";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { removeFromWishlist } from "../../Services/wishlist";
import { useNavigate } from "react-router-dom";
import { WishlistProduct } from "../../Interfaces/interfaces";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.wishlist.items);

  const removefromwishlist = (item: number) => {
    dispatch(removeFromWishlist(item));
  };

  const navigateToSingleProduct = (id: number, item: WishlistProduct) => {
    navigate(`/product/${id}`, { state: { item } });
  }

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <Search />
      </div>
      {!items.length && <div className="wishlist-noproduct">No Products!</div>}
      <div className="products-wishlist-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id} onClick={() => navigateToSingleProduct(item.id, item)}>
            <img
              src={item.image}
              alt="Product Card Image"
              height={300}
              width={300}
            />
            <div>{item.title}</div>
            <div className="product-price">
              <div> $ {item.price}</div>
              <button onClick={() => removefromwishlist(item.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
