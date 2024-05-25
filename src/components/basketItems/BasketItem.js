import React from 'react'
import "./Basketitem.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from '../../StateProvider';


function BasketItem(props) {
const [{basket},dispatch]=useStateValue();

const removeFromBasket = (props) => {
  
  dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: props.id
  })
}

  return (
    <div>
    <div className='item-container'>
    <div className=''><img className='product-img' src={props.image}></img></div>

<div className='product-information'>
<p className='title'>{props.title}</p>
<input className='quentity' type='number' min={1}  ></input>
<div className='other-option'>
    
<button onClick={removeFromBasket}>delete</button>
  
</div>
</div>
<div className='product-price'><CurrencyRupeeIcon/>{props.price}</div>

    </div>
    <hr></hr>
    </div>
  )
}

export default BasketItem
