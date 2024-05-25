import React from 'react'
import { auth, } from '../firebase';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Logout() {

    // const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
    // setSubmitButtonDisabled(true);
   const logout=()=>{
    
    signOut(auth)
    .then(() => {
        // setSubmitButtonDisabled(false);
      Navigate("/");
    }).catch((error) => {
      // An error happened.
    });
   }


  return (
    <div>
      <h1>this is your account</h1>
      <Link to="/">
      <button onClick={logout}>logout</button>
      </Link>
    </div>
  )
}

export default Logout
