import React from 'react'
import './Home.css'
import Product from './Product';
import Lowerheader from './Lowerheader';
import Header from "./Header";

import Homeimage from './Homeimage';

function Home(props) {
 

 const products=[{
  id:"1",
title:"sumsung galaxy s22 ultra 5G",
price:125000,
offer:12,
image:"https://m.media-amazon.com/images/I/61imYpK33qL._AC_UY327_FMwebp_QL65_.jpg",
amount:1
},
{
  id:"2",
  title:"boAt wireless headphone",
  price:1999,
  offer:60,
  image:"https://m.media-amazon.com/images/I/61ljxTBpTCL._AC_UY327_FMwebp_QL65_.jpg",
  amount:1
},
{
  id:"3",
  title:"van heusen men shirt",
  price:1099,
  offer:45,
  image:"https://m.media-amazon.com/images/I/81Ee0TWc74L._AC_UL600_FMwebp_QL65_.jpg",
  amount:1
}



];






return (
    <div className='home'>
    <Header name={props.name}/>
    <Lowerheader/>
    <div className='home-container'>
    
    <div className='img-slider'>

<div >
<Homeimage className='home-img'/>

</div>

</div>

 <div className='home-row'>
 <Product 
 id={products[0].id}
 title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}

 />
 <Product 
  id={products[1].id}
title={products[1].title}
image={products[1].image}
price={products[1].price}
offer={products[1].offer}/>
 <Product 
  id={products[2].id}
title={products[2].title}
image={products[2].image}
price={products[2].price}
offer={products[2].offer}/>
 

 </div>
 <div className='home-row'>
 <Product 
  id={products[0].id}
 title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/>
 <Product
  id={products[0].id}
  title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/>
 <Product 
  id={products[0].id}
 title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/> 
 <Product
  id={products[0].id}
  title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/> 

 </div>
 <div className='home-row'>
 <Product 
  id={products[0].id}
 title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/>
 <Product
  id={products[0].id}
  title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/>
 <Product
  id={products[0].id}
  title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/> 
 <Product
  id={products[0].id}
  title={products[0].title}
image={products[0].image}
price={products[0].price}
offer={products[0].offer}/> 

 </div>

      </div>


    </div>
  )
}

export default Home;
