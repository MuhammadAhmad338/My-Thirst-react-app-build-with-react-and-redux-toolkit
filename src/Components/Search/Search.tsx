import { RootState } from "../../Store/store";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Interfaces/interfaces";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Search.css";

const Search = () => {

  const navigate = useNavigate();
  const results = useSelector((state: RootState) => state.search.results);

  const componentB = (id: number, item: Product) => {
    navigate(`/product/${id}`, { state: { item } });
  }
 
  if (results.length === 0) {
    return <div className="no-results-found">
        <p>No Results Found</p>
        <p>Please Search By Products Titles</p>
    </div>
  }

  return (
    <div className="search-product-list">
      {results.map((item) => (
        <div
          onClick={() => componentB(item.id, item)}
          className="search-product-card"
          key={item.id}
        >
          <img
            src={item.image}
            alt="Product Card Image"
          />
          <div className="search-product-title">{item.title}</div>
          <div className="search-product-price">$ {item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Search;
