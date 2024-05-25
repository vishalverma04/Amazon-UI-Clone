import React from 'react'
import "./Subtotal.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Subtotal() {
  
  return (
    <div>
    <div className='subtotal'>
      {/* <p>Subtotal (<span className='total-item-count'>2</span>items):<CurrencyRupeeIcon className='currency-icon'/><span className='total-price'>56800</span></p> */}
      <pre>Subtotal : </pre>
      <pre>( <span className='total-item-count'>2</span> Item  )</pre>
      
      </div>
      <div>
      <CurrencyRupeeIcon/>
      <span className='total-price'>56800</span>
      </div>
      <button className='btn-to-buy'>proceed to buy</button>
    </div>
  )
}

export default Subtotal
