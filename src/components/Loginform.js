import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "./Loginform.css"

import GoogleButton from 'react-google-button';


import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';

import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

function Loginform() {
    const provider=new GoogleAuthProvider();

  const navigate=useNavigate();

  const [values,setvalues]=useState({
      email:"",
      pass:""
  });
  
  const [errormsg,setErrormsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

  const handleclick=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const user=result.user;
        navigate("/");
      }).catch((error) => {

      });
    
}
  
  const handleSubmission=()=>{
      if(!values.email || !values.pass){
          setErrormsg("please fill all the fields");
          return;
      }
      setErrormsg();
    setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth,values.email,values.pass)
      .then((res)=>{
          setSubmitButtonDisabled(false);
          
          navigate("/");
          // console.log(user);
      })
      .catch((err)=>{
          setSubmitButtonDisabled(false)
          if(err.message=="Firebase: Error (auth/invalid-email)."){
              setErrormsg("Invalid email")
          }else if(err.message=="Firebase: Error (auth/wrong-password)."){
            setErrormsg("enter correct password")
        }else if(err.message=="Firebase: Error (auth/user-not-found)."){
            setErrormsg("user not exist please create account")
        }
        else if(err.message=="Firebase: Error (auth/network-request-failed)."){
          setErrormsg("network connection failed")
        }
          else{
              setErrormsg(err.message)  
          }
          
          // console.log("Errors - ",err);
      });

  
      
  }





  return (
    <div>

    <div className='login-form-container'>
    <Link to="/">
    <img className='logo' src="https://tse4.mm.bing.net/th?id=OIP.xeVpAShsrzriqSfxbH42hAHaG1&pid=Api&P=0"></img>
    </Link>

    <div className='login-form'>
      <h1>sign in</h1>
      <form>
     <h5>E-mail</h5>
         <input type='Email' placeholder='enter email' onChange={e=>setvalues(p=>({...p,email:e.target.value}))}  ></input>
         <h5>Password</h5>
         <input type='password' placeholder='enter password' onChange={e=>setvalues(p=>({...p,pass:e.target.value}))} ></input>
         </form>
         <div className='errormsg'>{errormsg}</div>
<button disabled={submitButtonDisabled} onClick={handleSubmission} className='signbutton'>Sign in</button>

 

   <div className='googlebtn'><GoogleButton onClick={handleclick} className='google' /></div>
   <br></br>
   <br></br>
   <p>If you have no account then create new account</p>
<Link to="/sign-up">
<button  className='login-resistor-button'>create your amazon account</button>
</Link>



</div>



    </div>
    </div>
  )
}

export default Loginform;
