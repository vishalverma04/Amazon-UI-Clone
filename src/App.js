import Home from "./components/Home";
import AmazonTV from './pages/AmazonTV.js'
import Mobiles from "./pages/Mobiles";
import Sell from "./pages/Sell";
import Todaysdeals from "./pages/Todaysdeals";
import Bestsellers from "./pages/Bestsellers";
import Basket from "./components/Basket";
import Loginform from "./components/Loginform";
import Signup from "./components/Signup";
import React, { useEffect, useState } from 'react'
import { auth } from './firebase'
import Logout from "./components/Logout";
import {  Routes ,Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


function App(){

    const [username,setUsername]=useState('');

useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setUsername(user.displayName)
  }else{
    setUsername();
  }
});
},[]);


return(
    
<div className="app">
<Router>
<Routes>
<Route path="/" element={<Home name={username}/>}></Route>
<Route path="AmazonTV" element={<AmazonTV/>}></Route>
<Route path="sell" element={<Sell/>}></Route>
<Route path="bestsellers" element={<Bestsellers/>}></Route>
<Route path="mobiles" element={<Mobiles/>}></Route>
<Route path="todaysDeals" element={<Todaysdeals/>}></Route>
<Route path="yourbasket" element={<Basket/>} ></Route>
<Route path="Loginform" element={<Loginform/>}></Route>
<Route path="sign-up" element={<Signup/>}></Route>
<Route path="account" element={<Logout/>}></Route>


</Routes>
</Router>
</div>
)
} 
export default App;