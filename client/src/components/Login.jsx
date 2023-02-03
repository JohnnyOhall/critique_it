import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Styling
import './Login.scss';


const Login = props => {
  const [ login, setLogin ] = useState({
    email: "",
    password: ""
  });

  
  const submitRequest = ( data ) => {
    axios.post( '/users/login', data )
      .then(res => {
        props.setEmail(res.data.email)
        Cookies.set('email', res.data.email)
        props.update(props.state)
      })
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
            value={login.password}
            onChange={ e => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <div>
          <button className="login-button" type="submit" onClick={ () => submitRequest( login ) }>Login</button>
          <button className="login-button" type="submit" onClick={ props.back }>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Login;