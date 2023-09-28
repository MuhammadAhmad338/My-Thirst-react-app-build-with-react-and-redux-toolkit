import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../Store/store.ts";
import { Product } from "../../Interfaces/Product.ts";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../Services/wishlist.ts";
import { WishlistProduct } from "../../Interfaces/wishlistItems.ts";
import img from "../../assets/love.png";

const Category = () => {

    const navigate = useNavigate();
    const dispatch1 = useDispatch();
    const results = useSelector((state: RootState) => state.search.results);
    const componentB = (id: number, item: Product) => {
        navigate(`/product/${id}`, { state: { item } });
    }

    const addtowishlistplease = (item: Product) => {
        dispatch1(addToWishlist(item as unknown as WishlistProduct));
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
}
export default Category;