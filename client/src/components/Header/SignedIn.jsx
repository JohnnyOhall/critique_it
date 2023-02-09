//External Imports
import axios from "axios";
import React from "react";
import Cookies from "js-cookie";

// Styling
import './SignedIn.scss';

//Global Variables
import { avatarImages } from "../../constants/constants";


const SignedIn = props => {

  const signOut = () => {
    axios.post( '/users/logout' )
      .then(() => {
        props.update( props.state );
        Cookies.remove( 'email' );
        Cookies.remove( 'username' );
        Cookies.remove( 'avatar' );
      });
  };

  const avatarImage = avatarImages[props.avatar];

  return (
    <div className="signed-in" >
      <div className="username-signout">
        <div className="username">{ props.username } 🔒</div>
        <div>
          <button className="signout-button" type="submit" onClick={ signOut }>Sign-Out</button>
        </div>
      </div>
      <div className="avatar-image">
        <img src={ avatarImage } width="100px" height="100px"></img>
      </div>
    </div>
  );
};


export default SignedIn;