import React, { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";

import './EditAvatar.scss'

const EditAvatar = props => {

  const [ avatar, setAvatar ] = useState( props.current )

  const update = () => {
    axios.patch(`/users/update/avatar/${avatar}`)
      .then(res => {
        Cookies.set( 'avatar', res.data.avatar);
        props.mode( "share" );
        props.set({...props.user, avatar: res.data.avatar})
      })
      .catch(console.log)
  }

  return (
    <div className='avatar-select'>

      <fieldset className='avatar-select'>
        <legend>Select a new avatar</legend>

        <div className="avatar-row">
          <div className="avatar-item">
            <img src="images/avatars/male1.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={1} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 1} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/male2.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={2} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 2} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/male3.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={3} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 3} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/male4.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={4} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 4} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/male5.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={5} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 5} 
            />
          </div>
          
        </div>

        <div className="avatar-row">
          <div className="avatar-item">
            <img src="images/avatars/male6.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={6} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 6} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/male7.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={7} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 7} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female1.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={8} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 8} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female2.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={9} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 9} 
            />
          </div>
        </div>

        <div className="avatar-row">
          <div className="avatar-item">
            <img src="images/avatars/female3.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={10} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 10} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female4.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={11} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 11} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female5.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={12} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 12} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female6.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={13} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 13} 
            />
          </div>
          <div className="avatar-item">
            <img src="images/avatars/female7.png" />
            <input 
              type='radio' 
              name='avatar' 
              value={14} 
              onChange={e => setAvatar(e.target.value)}
              checked={avatar == 14} 
            />
          </div>
        </div>
      </fieldset>
      <div className="buttons-edit">
        <button onClick={ update }>save</button>
        <button onClick={ () => props.mode( "share" )}>back</button>
      </div>
    </div>
  );
};

export default EditAvatar;