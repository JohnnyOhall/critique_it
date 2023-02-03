import React from "react";

const SignedOut = props => {

  return (
    <div className='user'>
      <div className='sign-in'>
        <button onClick={ props.onLogin }>Sign-in 🗝️</button>
      </div>
      <br />
      <div className='register'>
        <button>Register 📋</button>
      </div>
    </div>
  )
}

export default SignedOut;