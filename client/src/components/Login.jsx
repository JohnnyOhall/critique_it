import React from "react";
import { useState } from "react";
import axios from "axios"; 


const Login = props => {
  const [ login, setLogin ] = useState({
    email: "",
    password: ""
  });

  const submitRequest = ( data ) => {
    console.log('here')

    axios.post( '/users/login', data )
      .then(res => {
        console.log(res.data.email)
        props.setEmail(res.data.email)
        props.update(props.state)
      })
  }

  return (
    <div className='user'>
      <form autoComplete="off" onSubmit={ e => e.preventDefault( )} >
        <div>
          <input 
            placeholder="username"
            type="text" 
            value={login.username}
            onChange={ e => setLogin({ ...login, email: e.target.value })}
          />
        </div>
        <div>
          <input 
            placeholder="****" 
            type="password" 
            value={login.password}
            onChange={ e => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <div><button type="submit" onClick={ () => submitRequest( login ) }>Login</button></div>
      </form>
    </div>
  )
}

export default Login;