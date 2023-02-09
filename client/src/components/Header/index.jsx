// External imports
import React from "react"
import { useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';

//Components & hooks
import useLogin from "../../hooks/visualModes/useLogin";
import SignedOut from "./SignedOut";
import Login from "./Login";
import SignedIn from "./SignedIn";

//Providers
import { RegisterContext } from "../../providers/RegisterProvider";
import { LoginContext } from "../../providers/LoginProvider";

// Styling
import './styles.scss';

//Global Variables and modes
const SIGNED_OUT = "SIGNED_OUT", SIGNED_IN = "SIGNED_IN", LOGIN = "LOGIN";


const Header = props => {
  const { setRegister } = useContext( RegisterContext );
  const { setLoggedIn } = useContext( LoginContext );

  const { mode, transition, back } = useLogin( Cookies.get('email') ? SIGNED_IN : SIGNED_OUT );
  const [ userCookie, setUserCookie ] = useState({});

  useEffect( () => {
    setUserCookie({
      ...userCookie, 
      email: Cookies.get( 'email' ), 
      username: Cookies.get( 'username' ), 
      avatar: Cookies.get( 'avatar' ) 
    });
  }, []);

  useEffect(() => {
    setLoggedIn( mode === SIGNED_IN ? true : false );
    setRegister( mode === SIGNED_IN && false );
  }, [ mode ]);

  return (
    <header>
      <div className='logo'>
        <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
      </div>
      { mode === SIGNED_OUT && 
        <SignedOut 
          onLogin={ () => transition( LOGIN ) } 
          onRegister={ () => setRegister( true ) }
        />
      }
      { mode === LOGIN && 
        <Login 
          update={ transition } 
          state={ SIGNED_IN } 
          setUserCookie={ setUserCookie } 
          cookie={ userCookie } 
          back={ back } 
        />
      }
      { mode === SIGNED_IN && 
        <SignedIn 
          username={ userCookie.username } 
          email={ userCookie.email } 
          avatar={ userCookie.avatar } 
          update={ transition } 
          state={ SIGNED_OUT } 
        /> 
      }
    </header>
  );
};


export default Header;
