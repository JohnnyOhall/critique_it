//External Imports
import React from "react";


const SignedOut = props => {

  return (
    <div className='user'>
      <div className='sign-in'>
        <button onClick={ props.onLogin }>Sign-in 🗝️</button>
      </div>
      <br />
      <div className='register'>
        <a href="#nav-profile">
          <button onClick={ props.onRegister}>Register 📋</button>
        </a>
      </div>
    </div>
  );
};


export default SignedOut;