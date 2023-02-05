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
  const { setLoggedIn } = useContext( GlobalContext );

  useEffect( () => {
    setEmail( Cookies.get( 'email' ) );
    setAvatar( Cookies.get( 'avatar' ) );
  }, []);

  const { mode, transition, back } = useLoginVisualMode( Cookies.get( 'email' ) ? SIGNED_IN : SIGNED_OUT );

  const [ email, setEmail ] = useState( Cookies.get( 'name' ) || '' );

  const [ avatar, setAvatar ] = useState( Cookies.get( 'name' ) || '' );

  useEffect(() => {
    setLoggedIn( mode === SIGNED_IN ? true : false )
  }, [ mode ]);

  return (
    <header>
      <div className='logo'>
        <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
      </div>
      { mode === SIGNED_OUT && <SignedOut onLogin={ () => transition( LOGIN )} />}
      { mode === LOGIN && <Login update={ transition } state={ SIGNED_IN } setEmail={ setEmail } setAvatar={ setAvatar } back={ back } /> }
      { mode === SIGNED_IN && <SignedIn email={ email } avatar={ avatar } update={ transition } state={ SIGNED_OUT } /> }
    </header>
  );
};


export default Header;
