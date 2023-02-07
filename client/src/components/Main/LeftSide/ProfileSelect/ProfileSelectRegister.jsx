// External imports
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Components & hooks
import { GlobalContext } from "../../../Application";


const ProfileSelectRegister = props => {

  const { setRegister } = useContext( GlobalContext );
  const [ passMatch, setPassMatch ] = useState( false );
  const [ emailMatch, setEmailMatch ] = useState( false );
  const [ userInfo, setUserInfo ] = useState({
    username: '',
    email: '',
    emailConfirm: '',
    password: '', 
    PassConfirm: '',
    avatar: null,
    bio: ''
  });

  useEffect(() => {
    setPassMatch( false );
    setEmailMatch( false );
    userInfo.PassConfirm === userInfo.password ? setPassMatch( true ) : setPassMatch( false );
    userInfo.emailConfirm === userInfo.email ? setEmailMatch( true ) : setEmailMatch( false );
    
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
          <label for='username'>Username:</label>
          <input 
            id='username' 
            type="text" 
            placeholder=' Enter a username'
            value={ userInfo.username }
            onChange={ e => setUserInfo({ ...userInfo, username: e.target.value })}
          />
        </div>

        <div className="password-box">
          <span>Email:</span>
          <br/>
          <input 
            id='email' 
            type="email" 
            placeholder=' Enter an email address'
            value={ userInfo.email }
            onChange={ e => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <input 
            id='confirm' 
            type="email" 
            placeholder=' Confirm email address'
            value={ userInfo.emailConfirm }
            onChange={ e => setUserInfo({ ...userInfo, emailConfirm: e.target.value })}
          />    
        </div>

        { !emailMatch ? <span className="error-msg">Emails do not match!</span> : <br/> }

        <div className="password-box">
          <span>Password:</span>
          <br/>
          <input 
            id='password' 
            type="password" 
            placeholder=' Enter a password'
            value={ userInfo.password }
            onChange={ e => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <input 
            id='confirm' 
            type="password" 
            placeholder=' Confirm password'
            value={ userInfo.PassConfirm }
            onChange={ e => setUserInfo({ ...userInfo, PassConfirm: e.target.value })}
          />    
        </div>

        { !passMatch ? <span className="error-msg">Passwords do not match!</span> : <br/> }
        
        <div className='bio-box'>
          <label for="bio">User Bio (optional):</label>
          <textarea 
            className="bio-input" 
            type="text" 
            id="bio" 
            placeholder=" Enter a short user bio"
            onChange={ e => setUserInfo({ ...userInfo, bio: e.target.value })}
          />
        </div>


        <div 
          className='avatar-select' 
          onChange={ e => setUserInfo({ ...userInfo, avatar: e.target.value })}
        >
          
          <fieldset className='avatar-select'>
            <legend>Select an Avatar</legend>

            <div className="avatar-row">
              <div className="avatar-item">
                <img src="images/avatars/male1.png"/>
                <input type='radio' name='avatar' value={ 1 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male2.png"/>
                <input type='radio' name='avatar' value={ 2 }></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male3.png"/>
                <input type='radio' name='avatar' value={ 3 }></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male4.png"/>
                <input type='radio' name='avatar' value={ 4 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male5.png"/>
                <input type='radio' name='avatar' value={ 5 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male6.png"/>
                <input type='radio' name='avatar' value={ 6 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/male7.png"/>
                <input type='radio' name='avatar' value={ 7 } ></input>
              </div>
            </div>

            <div className="avatar-row">
              <div className="avatar-item">
                <img src="images/avatars/female1.png"/>
                <input type='radio' name='avatar' value={ 8 }></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female2.png"/>
                <input type='radio' name='avatar' value={ 9 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female3.png"/>
                <input type='radio' name='avatar' value={ 10 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female4.png"/>
                <input type='radio' name='avatar' value={ 11 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female5.png"/>
                <input type='radio' name='avatar' value={ 12 }></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female6.png"/>
                <input type='radio' name='avatar' value={ 13 } ></input>
              </div>
              <div className="avatar-item">
                <img src="images/avatars/female7.png"/>
                <input type='radio' name='avatar' value={ 14 }></input>
              </div>
            </div>
          </fieldset>
        </div>
        

        { (passMatch && emailMatch) && 
          <button 
            disabled={ !userInfo.password || !userInfo.username || !userInfo.email || !userInfo.avatar }
            onClick={ () => submitRequest( userInfo )} 
          > 
            Register 
          </button> 
        }
        { (!passMatch || !emailMatch) && <button disabled> Register </button> }
        <button onClick={ () => setRegister( false )}>
          <a href="#">Cancel</a>
        </button>


      </form>
    </div>
  );
};


export default ProfileSelectRegister;