//External Imports
import axios from "axios";
import React, { useContext } from "react";
import Cookies from "js-cookie";

// Styling
import './SignedIn.scss';

//Global Variables
import { avatarImages } from "../../constants/constants";
import { CritiqueContext } from "../../providers/CritiqueProvider";


const SignedIn = props => {

  const { setDisplay, DEFAULT, setCreate, MAIN } = useContext(CritiqueContext)

  const signOut = () => {
    axios.post( '/users/logout' )
      .then(() => {
        props.update( props.state );
        Cookies.remove( 'email' );
        Cookies.remove( 'username' );
        Cookies.remove( 'avatar' );
        setDisplay(DEFAULT)
        setCreate(MAIN)
      });
  };

  // const avatarImage = avatarImages[props.avatar];

  return (
    <div className="signed-in" >
      <div className="username-signout">
        <div>
          <button className="signout-button" type="submit" onClick={ signOut }>
            <img src="images/signout.png"/>
          </button>
        </div>
        <div className="avatar-image">
          <img src={ avatarImages[Cookies.get('avatar')] } width="150px" height="150px"></img>
        </div>
        <div className="username">{ Cookies.get('username') } 🔒</div>
      </div>
    </div>
  );
};


export default SignedIn;