/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { fetchProducts } from "../../Services/getProducts";
import { useAppDispatch } from "../../hooks/hooks";
import { Product } from "../../Interfaces/interfaces";
import img1 from "../../assets/1494.gif";
import { Link, useNavigate } from "react-router-dom";
import "./products.css";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

const Products = () => {

  const dispatch = useAppDispatch();
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
    return <div className="failed">
      <p>Please login or resgister to see the products {error}</p>
      <Link to="/account/login" className="failed-link">
        Create Account
      </Link>
    </div>;
  }

  const componentB = (id: number, item: Product) => {
    navigate(`/product/${id}`, { state: { item } });
  }

  return (
    <>
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
          />
          <div className="product-title">{item.title}</div>
          <div className="product-price">$ {item.price}</div>
        </div>
      ))}
    </div>
    <TrendingProducts />
    </>
  );
};

export default Products;
