/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { MyCollection } from '../../Interfaces/interfaces';
import img from '../../assets/electronics.jpg';
import img1 from '../../assets/jewelry.jpg';
import img2 from '../../assets/mensClothing.jpg';
import img3 from '../../assets/womenClothing.jpg';
import { useAppDispatch } from '../../hooks/hooks';
import './Collections.css';
import { searchByCategory } from '../../Services/searchService';


const Collections = () => {

    const navigate = useNavigate();
    const collectionDispatch = useAppDispatch();

    const myCollections: MyCollection[] = [
        { id: 1, name: "Electronics", image: `${img}` },
        { id: 2, name: "Jewelry", image: `${img1}` },
        { id: 3, name: "Men's clothing", image: `${img2}` },
        { id: 4, name: "Women's clothing", image: `${img3}` }
    ];

    const componentB = () => {
        navigate(`/products/productByCategory`);
    }

    const searchCollections = (name: string) => {
        collectionDispatch(searchByCategory(name));
    }

    return (
        <div className='collections'>
            <p>All Collections</p>
            <div className="product-list">
                {myCollections.map((item) => (
                    <div className='collection-product-card' key={item.id}>
                        <img src={item.image} alt="Collections Card" />
                        <div className='collection-product-content'>
                            <p>{item.name}</p>
                            <div className='collection-button' onClick={() => {
                                componentB(),
                                    searchCollections(item.name)
                            }}>
                                Shop Now
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collections;