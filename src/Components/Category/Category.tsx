import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../Store/store.ts";
import { Product } from "../../Interfaces/interfaces.ts";
import { useNavigate } from "react-router-dom";

const Category = () => {

    const navigate = useNavigate();
    const results = useSelector((state: RootState) => state.search.results);

    const componentB = (id: number, item: Product) => {
        navigate(`/product/${id}`, { state: { item } });
    }

    return (
        <div className="product-list">
            {results.map((item) => (
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
                    <div className="product-details">
                        <div className="product-price">$ {item.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Category;