/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { fetchProducts } from "../../Services/getProducts";
import { useAppDispatch } from "../../hooks/hooks";
import { Product } from "../../Interfaces/Product";
import { addToWishlist } from "../../Services/wishlist";
import { WishlistProduct } from "../../Interfaces/wishlistItems";
import img from "../../assets/love.png";
import img1 from "../../assets/1494.gif";
import { useNavigate } from "react-router-dom";
import "./products.css";

const Products = () => {
  const dispatch = useAppDispatch();
  const dispatch1 = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: RootState) => state.api.data);
  const error = useSelector((state: RootState) => state.api.error);
  const status = useSelector((state: RootState) => state.api.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="loading"><img src={img1} alt="Loading Gif" width={65} height={65} /></div>;
  }

  if (status === "failed") {
    return <div className="failed">Failed... {error}</div>;
  }
  
  const addtowishlistplease = (item: Product) => {
    dispatch1(addToWishlist(item as unknown as WishlistProduct));
  }

  const componentB = (id: number, item: Product) => {
    navigate(`/product/${id}`, {state:  {item}});
  }

  return (
      <div className="product-list">
        {data.map((item) => (
            <div
                onClick={() => componentB(item.id, item)}
                className="product-card"
                key={item.id}
            >
              <img
                  src={item.image}
                  alt="Product Card Image"
                  height={300}
                  width={300}
              />
              <div className="product-title">{item.title}</div>
              <div className="product-description">{item.description}</div>
              <div className="product-details">
                <div className="product-price">$ {item.price}</div>
                <img
                    src={img}
                    alt="Add to Wishlist"
                    width={25}
                    height={25}
                    onClick={() => addtowishlistplease(item)}
                    className="wishlist-icon"
                />  
              </div>
            </div>
        ))}
      </div>
  );
};

export default Products;
