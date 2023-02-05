//External Imports
import axios from "axios";
import React from "react";
import Cookies from "js-cookie";


const SignedIn = props => {

  const signOut = () => {
    axios.post( '/users/logout' )
      .then(() => {
        props.update( props.state );
        Cookies.remove( 'email' );
      });
  };

  return (
    <div className="Signed-in" >
    <div>{ props.email }🔒</div>
    <br/>
    <div><button className="login-button" type="submit" onClick={ signOut }>Sign-Out</button></div>
    </div>
  );
};


export default SignedIn;