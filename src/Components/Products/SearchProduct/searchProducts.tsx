import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store";
import './searchProducts.css';

const SearchProducts = () => {

    const searchProducts = useSelector((item: RootState) => item.search.results);

    return (
        <div>
            <h1>Search Products</h1>
            <ul>
                {searchProducts.map((result) => (
                    <li key={result.id}>
                        <img src={result.image} alt="Product Image" width={120} height={120} />
                        <p>{result.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchProducts