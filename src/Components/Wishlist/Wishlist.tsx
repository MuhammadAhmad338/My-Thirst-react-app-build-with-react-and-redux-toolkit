import "./Wishlist.css";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { removeFromWishlist } from "../../Services/wishlist";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.wishlist.items);

  const removefromwishlist = (item: number) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <Search />
      </div>
      {!items.length && <div className="wishlist-noproduct">No Products!</div>}
      {items.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt="Product Card Image"
            height={300}
            width={300}
          />
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div className="product-price">
            <div> $ {item.price}</div>
            <button onClick={() => removefromwishlist(item.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
