/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { fetchProducts } from "../../Services/getProducts";
import { useAppDispatch } from "../../hooks/hooks";
import { addToCart } from "../../Services/cartService";
import { Product } from "../../Interfaces/Product";
import { CartProduct } from "../../Interfaces/cartItems";

import "./products.css";
import { addToWishlist } from "../../Services/wishlist";
import { WishlistProduct } from "../../Interfaces/wishlistItems";


const Products = () => {
  const dispatch = useAppDispatch();
  const dispatch1 = useDispatch();
  const data = useSelector((state: RootState) => state.api.data);
  const error = useSelector((state: RootState) => state.api.error);
  const status = useSelector((state: RootState) => state.api.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed... {error}</div>;
  }

  const addtocart = (item: Product) => {
    dispatch1(addToCart(item as unknown as CartProduct));
  };
  const addtowishlistplease = (item: Product) => {
    dispatch1(addToWishlist(item as unknown as WishlistProduct));
  }

  return (
    <div className="products">
      {data.map((item) => (
        <div className="product-card" key={item.id}>
          <div>{item.category}</div>
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
            <img src="src/assets/love.png" alt="" width={25} height={25} onClick={() => addtowishlistplease(item)} />
            <button onClick={() => addtocart(item)}>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
