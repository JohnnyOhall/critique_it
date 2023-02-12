// External imports
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

// Components
import EditAvatar from "./EditAvatar";
import EditUserInfo from "./EditUserInfo";
import ShareProfile from "./ShareProfile";


// Constants
import { avatarImages } from "../../../../constants/constants";

// Styles
import './Main.scss';



const Main = props => {

  const [ user, setUser ] = useState( {} );
  const [ editUser, setEditUser ] = useState("share");
  
  useEffect( () => {
    let tempData;
    const email = Cookies.get( 'email' );

    axios.get( `/users/${ email }` )
      .then( res => { 
        tempData = res.data.userData;
        return axios.get(`/pages/profile/userstats`);
      })
      .then( res => { 
        const stats = res.data.results;
        return setUser({
          ...tempData, 
          score: stats.score, 
          shows: stats.shows, 
          episodes: stats.episodes 
        });
      })
      .catch( console.log );

  }, []);

  return (
    <div className="profile-select-main">

      <div className="profile-header">
        <div className="avatar-edit">
          <img 
            src="/images/edit.png"
            onClick={()=> setEditUser("avatar")}
          />
        </div>
        <div className="avatar-display">
          <img src={ avatarImages[ user.avatar ]} width="100px" height="100px" />
        </div>
        <div className="username-display">
          <p>{ user.username }</p>
        </div> 
      </div>


      <div className="profile-user-info">
        <div className="user-edit">
          <img 
            src="/images/edit.png"
            onClick={() => setEditUser("userInfo")}
          />
        </div>
        <div className="user-content">
          <div className="content-line">
            <span className="title">Email: </span>
            <span className="content email">{user.email}</span>
          </div>
          <div className="content-line">
            <span className="title">Bio: </span>
            <span className="content bio">{user.bio}</span>
          </div>  
        </div> 
      </div>


      <div className="profile-stats">
        <p><b>Total shows added: </b>{ user.shows } </p>
        <p><b>Total Critiques: </b>{ user.episodes }</p>
        <p><b>Total score: </b>{ user.score }</p>
        <p><b>Followers: </b></p>
        <p><b>Follows: </b></p>
      </div>


      <div className="profile-edit">
        { editUser === "share" && <ShareProfile /> }
        { editUser === "avatar" && <EditAvatar mode={setEditUser} current={user.avatar}/> }
        { editUser === "userInfo" && <EditUserInfo mode={setEditUser}/> }
      </div> 

    </div>
  );
};


export default Main;