// External imports
import React from "react"
import { useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';

//Components & hooks
import useLoginVisualMode from "../hooks/useLoginVisualMode";
import SignedOut from "./SignedOut";
import Login from "./Login";
import SignedIn from "./SignedIn";
import { GlobalContext } from "./Application";

// Styling
import './Header.scss';

//Global Variables and modes
const SIGNED_OUT = "SIGNED_OUT", SIGNED_IN = "SIGNED_IN", LOGIN = "LOGIN";


const Header = props => {
  const { setLoggedIn, setRegister } = useContext( GlobalContext );

  useEffect( () => {
    setUserCookie( Cookies.get( 'user' ) );
  }, []);

  const { mode, transition, back } = useLoginVisualMode( Cookies.get( 'user' ) ? SIGNED_IN : SIGNED_OUT );

  const [ userCookie, setUserCookie ] = useState( Cookies.get( 'user' ) || {} );

  useEffect(() => {
    setLoggedIn( mode === SIGNED_IN ? true : false )
  }, [ mode ]);

  return (
    <header>
      <div className='logo'>
        <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
      </div>
      { mode === SIGNED_OUT && <SignedOut onLogin={ () => transition( LOGIN )} onRegister={ () => setRegister( true ) }/>}
      { mode === LOGIN && <Login update={ transition } state={ SIGNED_IN } setUserCookie={ setUserCookie } cookie={ userCookie } back={ back } /> }
      { mode === SIGNED_IN && <SignedIn email={ userCookie.email } avatar={ userCookie.avatar } update={ transition } state={ SIGNED_OUT } /> }
    </header>
  );
};


export default Header;
