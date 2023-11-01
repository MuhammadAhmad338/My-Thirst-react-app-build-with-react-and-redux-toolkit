/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { fetchProducts } from "../../Services/getProducts";
import { useAppDispatch } from "../../hooks/hooks";
import { Product } from "../../Interfaces/interfaces";
import img1 from "../../assets/1494.gif";
import { Link, useNavigate } from "react-router-dom";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import "./products.css";

const Products = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  const error = useSelector((state: RootState) => state.api.error);
  const status = useSelector((state: RootState) => state.api.status);
  const data = useSelector((state: RootState) => state.api.data);

  useEffect(() => {
    // Fetch data when the component first mounts
    dispatch(fetchProducts());
  }, [dispatch, data.length]);

  if (status === "loading") {
    return <div className="loading"><img src={img1} alt="Loading Gif" width={65} height={65} /></div>;
  }

  if (status === "failed") {
    return <div className="failed">
      <p>Please login or resgister to see the products {error}</p>
      <Link to="/account/login" className="failed-link">
       CREATE ACCOUNT
      </Link>
    </div>;
  }

  const componentB = (id: number, item: Product) => {
    navigate(`/product/${id}`, { state: { item } });
  }

  return (
    <>
    <div className="product-list">
      {data.map((item: Product) => (
        <div
          onClick={() => componentB(item.id, item)}
          className="product-card"
          key={item.id}
        >
          <img
            src={item.image}
            alt="Product Card Image"
          />
          <p className="product-title">{item.title}</p>
          <p className="product-price">$ {item.price}</p>
        </div>
      ))}
    </div>
    <TrendingProducts />
    </>
  );
};

export default Products;
