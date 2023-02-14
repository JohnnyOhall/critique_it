//External Imports
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Styling
import './Login.scss';
import { ExploreContext } from "../../providers/ExploreProvider";



const Login = props => {

  const [ login, setLogin ] = useState({
    email: "",
    password: ""
  });

  const { DEFAULT, setDisplay } = useContext(ExploreContext)

  const submitRequest = ( data ) => {
    axios.post( '/users/login', data )
      .then( res => {
        props.setUserCookie( {
          email: res.data.email,
          avatar: res.data.avatar,
          username: res.data.username
        } );

        Cookies.set( 'email', res.data.email);
        Cookies.set( 'avatar', res.data.avatar);
        Cookies.set( 'username', res.data.username);
        
        setDisplay(DEFAULT);
        props.update( props.state );
      });
  }
  
  return (
    <div className='user'>
      <form autoComplete="off" onSubmit={ e => e.preventDefault( )} >
        <div className="login-username">
          <input 
            placeholder="username"
            type="text" 
            value={login.username}
            onChange={ e => setLogin({ ...login, email: e.target.value })}
          />
        </div>
        <div className="login-password">
          <input 
            placeholder="****" 
            type="password" 
            value={ login.password }
            onChange={ e => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <div>
          <button className="login-button" type="submit" onClick={ () => submitRequest( login ) }>Login</button>
          <button className="login-button" type="submit" onClick={ props.back }>Cancel</button>
        </div>
      </form>
    </div>
  );
};


export default Login;