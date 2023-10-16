
import './TremdingProducts.css';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
    return (
        <div className="trending-products">
            <div className="trending-background-image" > </div>
            <div className="trending-content">
               <p className='trending-heading'>Trending</p>
               <p className='trending-paragraph'>Show off your personality with meaningful, eco-conscious expandable handmade bag's, that empower the light within you.</p>
               <Link to="/pages/collections">
                SHOP NOW
               </Link>
            </div>
        </div>
    );
}

export default TrendingProducts