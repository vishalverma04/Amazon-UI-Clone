import React from 'react'
import './Product.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from '../StateProvider';


function Product(props) {


const [{basket},dispatch]=useStateValue();

console.log("this is the basket  ====>",basket)
const addToBasket=()=>{
  // dispatch the item into data layer
  dispatch({
    type: 'ADD_TO_BASKET',
    item:{ 
        id: props.id,
        title:props.title,
        price:props.price,
        image:props.image,
        offer:props.offer

    }
  })


}

  return (
    <div className='product'>
       <div className='product-info'>
        <p className='product-name'>{props.title}</p>
        <p className='product-price-container'>
            <small><CurrencyRupeeIcon/></small>
            <strong className='product-price'>{props.price}</strong>
        </p>
        <div>
        <div className='product-extra-detail'>
            <p className='product-rating'>&#127775;&#127775;&#127775;&#127775;
            </p> <span className='product-deals'>up to <span className='product-offer'>{props.offer}</span>% off</span> 
            
            </div>
            <img src={props.image}>

            </img>
            <div className='button-icon'>
            <button onClick={addToBasket}>Add to basket</button> 
            </div>
        </div>
       </div>
    </div>
  )
}

export default Product
