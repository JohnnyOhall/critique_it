//External Imports
import axios from "axios";
import React from "react";
import Cookies from "js-cookie";

// Styling
import './SignedIn.scss';

//Global Variables
const avatarImages = {
  1: "images/avatars/avatar1.png",
  2: "images/avatars/avatar2.png",
  3: "",
  4: "",
  5: "",
  6: "images/add.png"
}


const SignedIn = props => {

  const signOut = () => {
    axios.post( '/users/logout' )
      .then(() => {
        props.update( props.state );
        Cookies.remove( 'email' );
        Cookies.remove( 'avatar' );
      });
  };

  const avatarImage = avatarImages[props.avatar];

  return (
    <div className="Signed-in" >
      <div className="email-signout">
        <div className="email">{ props.email }🔒</div>
        <div>
          <button className="login-button" type="submit" onClick={ signOut }>Sign-Out</button>
        </div>
      </div>
      <div className="avatar-image">
        <img src={ avatarImage } width="100px" height="100px">
        </img>
      </div>
    </div>
  );
};


export default SignedIn;