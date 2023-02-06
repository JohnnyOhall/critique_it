// External imports
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Components & hooks
import { GlobalContext } from "../../Application";


const ProfileSelectRegister = props => {

  const { setRegister } = useContext( GlobalContext );
  const [ match, setMatch ] = useState( false );
  const [ userInfo, setUserInfo ] = useState({
    name: '',
    email: '',
    password: '', 
    confirm: '',
    avatar: 1,
    bio: ''
  });

  useEffect(() => {
    setMatch( false );
    userInfo.confirm === userInfo.password ? setMatch( true ) : setMatch( false );
  },);

  const submitRequest = ( data ) => {
    axios.post( '/users/register', data )
      .then( () => {
        setRegister( false );
        window.scrollTo( 0, 0 );
        alert( "Registered Successfully! Please Sign-in..." );
      });
  };

  return (
    <div className="profile-select">

      <div className="register-title">
        <span >Register New Account</span>
      </div>
      
      <form onSubmit={ e => e.preventDefault() }>
        <div className="form-item">
          <label for='name'>Name</label>
          <input 
            id='name' 
            type="text" 
            placeholder='Enter a user name'
            value={ userInfo.name }
            onChange={ e => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>


        <div className="form-item">
          <label for='email'>Email</label>
          <input 
            id='email' 
            type="email" 
            placeholder='Enter an email address'
            value={ userInfo.email }
            onChange={ e => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>


        <div className="password-box">
          <span>Password</span>
          <br/>
          <input 
            id='password' 
            type="password" 
            placeholder='Enter a password'
            value={ userInfo.password }
            onChange={ e => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <input 
            id='confirm' 
            type="password" 
            placeholder='Confirm password'
            value={ userInfo.confirm }
            onChange={ e => setUserInfo({ ...userInfo, confirm: e.target.value })}
          />    
        </div>


        { !match ? <span className="error-msg">Passwords do not match!</span> : <br/> }
        

        <div className='bio-box'>
          <label for="bio">User Bio</label>
          <textarea 
            className="bio-input" 
            type="text" 
            id="bio" 
            placeholder="enter a short user bio"
            onChange={ e => setUserInfo({ ...userInfo, bio: e.target.value })}
          />
        </div>


        <div 
          className='avatar-select' 
          onChange={ e => setUserInfo({ ...userInfo, avatar: e.target.value })}
        >
          <fieldset className='avatar-select'>
            <legend>Select an Avatar</legend>
          <div className="avatar-item">
            <img src="images/lhl.png"/>
            <input type='radio' name='avatar' value={ 1 } checked></input>
          </div>
          <div className="avatar-item">
            <img src="images/lhl.png"/>
            <input type='radio' name='avatar' value={ 2 }></input>
          </div>
          <div className="avatar-item">
            <img src="images/lhl.png"/>
            <input type='radio' name='avatar' value={ 3 }></input>
          </div>
          <div className="avatar-item">
            <img src="images/lhl.png"/>
            <input type='radio' name='avatar' value={ 4 }></input>
          </div>
          </fieldset>
        </div>
        

        { match && 
          <button 
            disabled={ !userInfo.password || !userInfo.name || !userInfo.email || !userInfo.bio }
            onClick={ () => submitRequest( userInfo )} 
          > 
            Register 
          </button> 
        }
        { !match && <button disabled> Register </button> }
        <button onClick={ () => setRegister( false )}>
          <a href="#">cancel</a>
        </button>


      </form>
    </div>
  );
};


export default ProfileSelectRegister;