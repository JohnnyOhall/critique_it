import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Styles
import './EditUserInfo.scss';

const EditUserInfo = props => {

  const [ update, setUpdate ] = useState("none");
  const [ newInfo, setNewInfo ] = useState('');
  const [ compare, setCompare ] = useState('');
  const [ currentPass, setCurrentPass ] = useState('');
  const [ match, setMatch ] =useState(false)

  useEffect(() => {

    setMatch( false );
    newInfo === compare ? setMatch( true ) : setMatch( false );

  },);

  const updateUser = () => {

    const userPackage = {
      password: '',
      currentPassword: '',
      username: '',
      email: '',
      bio: ''
    }

    if (update === "email") {
      userPackage.email = newInfo

      axios.patch('/users/update/email', userPackage)
        .then( res => {
          Cookies.set( 'email', res.data.email);
          props.set({...props.user, email: res.data.email})
        })
        .catch(console.log)
    }

    if (update === "password") {
      userPackage.password = newInfo;
      userPackage.email = props.current.email;
      userPackage.currentPassword = currentPass;

      axios.patch('/users/update/password', userPackage)
        .then(console.log)
        .catch(console.log)
    }

    if (update === "username") {
      userPackage.username = newInfo

      axios.patch('/users/update/username', userPackage)
        .then(res => {
          props.set({...props.user, username: res.data.username})
          Cookies.set( 'username', res.data.username);
        })
        .catch(console.log)
    }

    if (update === "bio") {
      userPackage.bio = newInfo;

      axios.patch('/users/update/bio', userPackage)
        .then(res => {
          props.set({...props.user, bio: res.data.bio})
        })
        .catch(console.log)
    }

    setNewInfo('');
    props.mode("share");
  }

  const cancelForm = () => {

    setNewInfo('');
    setCompare('');
    setCurrentPass('');
    setUpdate('none');

  }

  return (
    <div className="edit-user-info">
      { update === "none" && <>
          <div className="edit-title">
            <span>What would you like to update?</span> 
          </div> 

          <div className="edit-content buttons">
            <span onClick={ () => setUpdate("email") }>email</span> 
            <span onClick={ () => setUpdate("password") }>password</span> 
            <span onClick={ () => setUpdate("username") }>username</span> 
            <span onClick={ () => setUpdate("bio") }>bio</span>
          </div>

          <div className="edit-image">
            <img src="https://www.torenco.fr/img/gear-update.gif" />
          </div> 

          <div className="edit-content buttons cancel">
            <span onClick={ () => props.mode("share") }>cancel</span>
          </div> 
      </> }
    
      { update === "email" && <div className="edit-content form">
        <div className="form-title">
          <span>Update your email address</span>
        </div>
        <div className="form-inputs">
          <div className="pass-sections">
            <label>Enter new email:</label>
            <input 
              type="email" 
              placeholder="Enter your new email address"
              value={newInfo}
              size={30}
              onChange={e => setNewInfo(e.target.value)}
            />
          </div>
          <div className="pass-sections">
            <label>Confirm new email:</label>
            <input 
              type="email" 
              placeholder="Enter your new email address"
              value={compare}
              size={30}
              onChange={e => setCompare(e.target.value)}
            />
          </div>
        </div>
        <div className="form-buttons">
          { match && 
            <button 
              onClick={ updateUser }
              disabled={ !newInfo }
            >save</button>
          }
          { !match && <button disabled>save</button>}
          <button onClick={ cancelForm }>cancel</button>
        </div>
      </div>}


      { update === "password" && <div className="edit-content form">
        <div className="form-title">
          <span>Update your password</span>
        </div>
        <div className="form-inputs">
          <div className="pass-sections">
            <label>Current password:</label>
            <input 
              type="password" 
              placeholder="Enter current password"
              value={currentPass}
              size={30}
              onChange={e => setCurrentPass(e.target.value)}
            />
          </div>
          <div className="pass-sections">
            <div>
              <label>New Password:</label>
              <input 
                type="password" 
                placeholder="Type new password" 
                value={newInfo}
                size={30}
                onChange={ e => setNewInfo(e.target.value)}
              />
            </div>
            <div> 
              <label>Confirm Password:</label>
              <input 
                type="password" 
                placeholder="Confirm new password" 
                value={compare}
                size={30}
                onChange={e => setCompare(e.target.value)}
              />
            </div> 
          </div>
        </div>
        <div className="form-buttons">
          { match && 
            <button 
              onClick={ updateUser }
              disabled={ !newInfo ||!currentPass}
            >save</button>
          }
          { !match && <button disabled>save</button>}
          <button onClick={ cancelForm }>cancel</button>
        </div>
      </div>}


      { update === "username" && <div className="edit-content form">
        <div className="form-title">
          <span>Update your username</span>
        </div>
        <div className="form-inputs">
          <div className="pass-sections">
            <label>Enter new username:</label>
            <input 
              type="text" 
              placeholder="Enter your new username"
              value={newInfo}
              size={30}
              onChange={e => setNewInfo(e.target.value)}
            />
          </div>
          <div className="pass-sections">
            <label>Confirm new username:</label>
            <input 
              type="text" 
              placeholder="Enter your new username"
              value={compare}
              size={30}
              onChange={e => setCompare(e.target.value)}
            />
          </div>
        </div>
        <div className="form-buttons">
          { match && 
            <button 
              onClick={ updateUser }
              disabled={ !newInfo }
            >save</button>
          }
          { !match && <button disabled>save</button>}
          <button onClick={ cancelForm }>cancel</button>
        </div>
      </div>}


      { update === "bio" && <div className="edit-content form">
        <div className="form-title">
          <span>Enter a new Bio</span>
        </div>
        <div className="form-inputs">
          <textarea 
            cols={ 100 }
            rows={ 5 }
            maxLength={ 450 }
            placeholder={props.current.bio}
            value={ newInfo }
            onChange={ e => setNewInfo(e.target.value)}
          ></textarea>
        </div>
        <div></div>
        <div className="form-buttons">
          <button disabled={ !newInfo } onClick={ updateUser }>save</button>
          <button onClick={ cancelForm }>cancel</button>
        </div>
      </div>}
    </div>
  );
};

export default EditUserInfo;