/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { removeFromWishlist } from "../../Services/wishlist";
import { useNavigate } from "react-router-dom";
import { WishlistProduct } from "../../Interfaces/interfaces";
import "./Wishlist.css";

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
        <input type="text" placeholder="Search here" className="wishlist-search" />
      </div>
      {!items.length && <div className="no-wishlist-products">No Products</div>}
      <div className="wishlist-products-list">
        {items.length > 0 && items.map((item) => <>
          <div className="wishlist-product-div">
            <div className="remove-wishlist" onClick={() => removefromwishlist(item.id)}>X</div>
            <div className="wishlist-product"
              onClick={() => navigateToSingleProduct(item.id, item)}>
              <img src={item.image} alt="" width={200} height={200} />
              <p>{item.title}</p>
              <p>$ {item.price}</p>
            </div>
            <div className="wishlist-cart">MOVE TO CART</div>
          </div>
        </>)}
      </div>
    </div>
  );
};

export default Wishlist;
