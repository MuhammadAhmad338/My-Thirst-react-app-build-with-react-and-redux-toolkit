import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store";
import './searchProducts.css';

const SearchProducts = () => {

    const searchProducts = useSelector((item: RootState) => item.search.results);

    return (
               <div className="searched-products">
                   {searchProducts.map((result) => (
                       <div key={result.id} className="search-product-card">
                           <img src={result.image} alt="Product Image" width={200} height={200} />
                           <p>{result.title}</p>
                           <p>Dollars ${result.price}</p>
                       </div>
                   ))}
               </div>
    );
}

export default SearchProducts