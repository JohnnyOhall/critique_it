// External imports
import React from "react"

// Styling
import './Header.scss';


const Header = props => {
  //🔒

  return (
    <header>
      <div className='logo'>
        <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
      </div>

      <div className='user'>
        <div className='sign-in'>
          <button>Sign-in 🗝️</button>
        </div>
        <br />
        <div className='register'>
          <button>Register 📋</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
