import { Link } from 'react-router-dom';
import '../assets/Categories.css'

const Categories = () => {
    return ( 
        <div className="categories_wrap">
            <h2>Categories</h2>
            <hr/>
            <ul>
            <li className="slash"><Link to={`/detail/electronics`}>Electronics</Link></li>
                <li className="slash"><Link to={`/detail/jewelery`}>Jewelery</Link></li>
                <li className="slash"><Link to={`/detail/men's clothing`}>Men's Clothing</Link></li>
                <li><Link to={`/detail/women's clothing`}>Women's Clothing</Link></li>
            </ul>
        </div>
     );
}
 
export default Categories;