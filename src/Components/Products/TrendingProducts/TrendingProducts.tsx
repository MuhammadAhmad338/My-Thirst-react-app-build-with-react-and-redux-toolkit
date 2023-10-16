import './TrendingProducts.css';
import img1 from '../../../assets/backgroundImage.jpg';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
    return (
        <div className="trending-products">
           <img src={img1} className='trending-background-image' alt="trending-background-image"  />
            <div className="trending-content">
                <p className='trending-heading'>Trending</p>
                <p className='trending-paragraph'>Show off your personality with meaningful, eco-conscious expandable handmade bag's, that empower the light within you.</p>
                <Link to="pages/collections">
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
}

export default TrendingProducts;