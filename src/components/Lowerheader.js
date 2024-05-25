import './Lowerheader.css';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function Lowerheader(){

    return(

<div className='container'>

<MenuIcon className='menu-icon'/><span className='menu-selector'>All</span>
<nav className='nav-bar'>
    <ul>
    <li className="nav-item">
        <Link className='nav-link-active' to="/AmazonTV">AmazonTV</Link>
    </li>
    <li className="nav-item">
        <Link className='nav-link-active' to="/sell">sell</Link>
    </li>
    <li className="nav-item">
        <Link className='nav-link-active' to="/bestsellers">best sellers</Link>
    </li>
    <li className="nav-item">
        <Link className='nav-link-active' to="/mobiles">mobiles</Link>
    </li>
   
    <li className="nav-item">
        <Link className='nav-link-active' to="/todaysDeals">today's deals</Link>
    </li>
    
    
    
    
    </ul>
   
</nav>


</div>
    );
}
export default Lowerheader;