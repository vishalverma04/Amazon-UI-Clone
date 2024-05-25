import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';




function Header(props){

const [{basket,user},dispatch]=useStateValue();

let address=props.name ? "/account":"/Loginform" ;

    return (
<div className='header'>
<Link to="/">
<img className='header-logo' src="https://vignette.wikia.nocookie.net/adeles/images/b/b8/Black-amazon-logo.png/revision/latest?cb=20151120233121"/>
</Link>
   
    <div className='header-nav'>
<div className='header-option'>
<Link className='header-nav-link' to="/selectYourAddress" >
 <span className='header-option-lineone'>hello</span>
 <span className='header-option-linetwo'><LocationOnIcon/>Select your address</span>
 </Link>
</div>
</div>
<div className='header-search'>
    <input className='header-search-in' type='text' placeholder='Search Amazon.in'></input>
     <SearchIcon className='search-icon'/> 
</div>
<div className='header-nav'>

<div className='header-option'>
<Link className='header-nav-link' to={address} >
<span className='header-option-lineone'>hello,guest</span>
<span className='header-option-linetwo'>{props.name ? ` ${props.name}`: "sign in "}</span>
</Link>
</div>

<div className='header-option'>
<Link className='header-nav-link' to="/returns&order" >
<span className='header-option-lineone'>Returns</span>
<span className='header-option-linetwo'>& Order</span>
</Link>
</div>
<div className='header-option'>
<Link className='header-nav-link' to="/your_prime" >
<span className='header-option-lineone'>Your</span>
<span className='header-option-linetwo'>Prime</span>
</Link>
</div>
<div className='header-basket'>
<Link className='header-nav-basket-link' to="/yourbasket" >
<AddShoppingCartIcon/>
<span className='header-basket-item-count'>{basket.length}</span>
</Link>
</div>
</div>


</div>

    )
}
export default Header;