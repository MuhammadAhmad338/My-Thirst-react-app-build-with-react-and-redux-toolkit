import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../Store/store.ts";
import { addToCart } from "../../Services/cartService.ts";
import { addToWishlist } from "../../Services/wishlist.ts";
import { WishlistProduct } from "../../Interfaces/wishlistItems.ts";
import { Product } from "../../Interfaces/Product.ts";
import { CartProduct } from "../../Interfaces/cartItems.ts";
import img from "../../assets/love.png";

const Category = () => {

    const results = useSelector((state: RootState) => state.category.results);
    const dispatch = useDispatch();

    const wishlist = (item: Product) => {
        dispatch(addToCart(item as unknown as WishlistProduct));
    };
    
    const cart = (item: Product) => {
        dispatch(addToWishlist(item as unknown as CartProduct));
    }

    return (
        <div className="products">
            {
                results.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div>{item.title}</div>
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
                            <img src={img} alt="" width={25} height={25} onClick={() => wishlist(item)} />
                            <button onClick={() => cart(item)}>ADD TO CART</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default Category;