import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "./Signup.css"
// import { useAccordionButton } from 'react-bootstrap'

import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from '..//firebase';
// import { Location } from 'react-router-dom';

function Signup() {
const navigate=useNavigate();

const [values,setvalues]=useState({
    yournames:"",
    email:"",
    pass:""
});

const [errormsg,setErrormsg]=useState("");
const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

const handleSubmission=()=>{
    if(!values.yournames || !values.email || !values.pass){
        setErrormsg("please fill all the fields");
        return;
    }
    setErrormsg();
  setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user=res.user;
      await  updateProfile(user,{
            displayName:values.yournames,
        });
        navigate("/");
   window.location.reload();
        // console.log(user);
    })
    .catch((err)=>{
        setSubmitButtonDisabled(false)
        if(err.message=="Firebase: Error (auth/email-already-in-use)."){
            setErrormsg("Email is already-in-use")
        }
        else if(err.message=="Firebase: Error (auth/invalid-email)."){
            setErrormsg("Invalid email")
        }
        else if(err.message=="Firebase: Error (auth/network-request-failed)."){
          setErrormsg("network connection failed")
        }
        else{
            setErrormsg(err.message)  
        }
        
        // console.log("Errors - ",err);
    })

    
}


  return (
    <div>
      
      <div className='login-form-container'>
    <Link to="/">
    <img className='logo' src="https://tse4.mm.bing.net/th?id=OIP.xeVpAShsrzriqSfxbH42hAHaG1&pid=Api&P=0"></img>
    </Link>

    <div className='login-form'>
      <h1>Sign-up</h1>
      <form>
      <h5>Name</h5>
      <input type='text' placeholder='enter name'  onChange={(e)=>setvalues((p)=>({...p,yournames:e.target.value
      }))} ></input>
     <h5>E-mail</h5>
         <input type='Email' placeholder='enter email' onChange={(e)=>setvalues((p)=>({...p,email:e.target.value
         }))} ></input>
        <h5>Password</h5>
         <input type='password' placeholder='enter password'  onChange={(e)=>setvalues((p)=>({...p,pass:e.target.value
         }))} ></input>
        
      </form>
      <div className='errormsg'>{errormsg}</div>
<button disabled={submitButtonDisabled} onClick={handleSubmission} className='signbutton signup'>Sign-up</button>

      
      <div className="already">
      <h3>already have a account</h3>
<Link to="/Loginform">
<button  className='login-resistor-button'>Login</button>
</Link>

</div>

</div>



    </div>


    </div>
  )
}

export default Signup
