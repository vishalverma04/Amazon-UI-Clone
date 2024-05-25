import React from 'react'
import Header from './Header'
import "./Basket.css"
import Subtotal from './Subtotal'
import BasketItem from './basketItems/BasketItem.js'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Home from './Home.js'
// import { useState } from 'react' 
import { useStateValue } from '../StateProvider'



function Basket() {

const [{basket,user},dispatch]=useStateValue('');

  return (
    <div >
    <Header/>
    <div className='basket-container'>
    <div className='basket-container-left'>
    <div className='upper-part'>
    <p>shopping cart</p>
    <h3>Price</h3>
    
    </div>
    <hr></hr>
    <div className='basket-items'>
    {basket.map(item=>(
<BasketItem

id={item.id}
title={item.title}
image={item.image}
price={item.price}
offer={item.offer}



/>

    ))}
   


    </div>
    {/* <div className='bottom-total'>
    <pre className='bottom-subtotal'>Subtotal  </pre>
    <pre>( <span className='total-item-count'>2</span> Item  ):  </pre>
    <CurrencyRupeeIcon/>
    <span className='total-price'>56800</span>
    </div> */}
    </div>
 
    <div className='basket-container-right'>
        
<Subtotal/>
    </div>
      


    </div>
    </div>
  )
}

export default Basket
