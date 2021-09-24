import { Link } from 'react-router-dom';
import '../assets/Categories.css'

const Categories = () => {
    return ( 
        <div className="categories_wrap">
            <h2>Categories</h2>
            <ul>
                <li className="slash"><Link to="/sports">Sports</Link></li>
                <li className="slash"><Link to="/electronics">Electronics</Link></li>
                <li className="slash"><Link to="/jwellery">Jwellery</Link></li>
                <li><Link to="/kids">Kid's</Link></li>
            </ul>
        </div>
     );
}
 
export default Categories;