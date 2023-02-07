//External Imports
import axios from "axios";
import React from "react";
import Cookies from "js-cookie";

// Styling
import './SignedIn.scss';

//Global Variables
const avatarImages = {
  1: "images/avatars/male1.png",
  2: "images/avatars/male2.png",
  3: "images/avatars/male3.png",
  4: "images/avatars/male4.png",
  5: "images/avatars/male5.png",
  6: "images/avatars/male6.png",
  7: "images/avatars/male7.png",
  8: "images/avatars/female1.png",
  9: "images/avatars/female2.png",
  10: "images/avatars/female3.png",
  11: "images/avatars/female4.png",
  12: "images/avatars/female5.png",
  13: "images/avatars/female6.png",
  14: "images/avatars/female7.png",
}


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