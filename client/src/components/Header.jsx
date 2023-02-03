// External imports
import React from "react"
import { useState, useEffect } from "react";

//Components
import useVisualMode from "../hooks/useVisualMode";
import SignedOut from "./SignedOut";
import Login from "./Login";
import SignedIn from "./SignedIn";

// Styling
import './Header.scss';

const SIGNED_OUT = "SIGNED_OUT", SIGNED_IN = "SIGNED_IN", LOGIN = "LOGIN";


const Header = props => {
  const { mode, transition, back } = useVisualMode(SIGNED_OUT);

  const [email, setEmail] = useState("")

  return (
    <header>
      <div className='logo'>
        <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
      </div>
      { mode === SIGNED_OUT && <SignedOut onLogin={ () => transition( LOGIN )} />}
      { mode === LOGIN && <Login update={transition} state={SIGNED_IN} setEmail={setEmail} /> }
      { mode === SIGNED_IN && <SignedIn email={email} /> }
    </header>
  );
};

export default Header;
