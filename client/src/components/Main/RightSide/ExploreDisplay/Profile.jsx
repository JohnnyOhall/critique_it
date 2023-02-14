// External Imports
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import Cookies from 'js-cookie'

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";

// Constants
import { avatarImages } from "../../../../constants/constants";

//styles
import './Profile.scss';


const Profile = props => {

  const { 
    DEFAULT, 
    setDisplay, 
    profileGlobal, 
    setProfileGlobal
  } = useContext(ExploreContext);

  const [ ProfileInfo, setProfileInfo ] = useState({})

  
  const [ user, setUser ] = useState( {} );

  useEffect( () => {
    let tempData;
    const email = Cookies.get( 'email' );

    console.log(ProfileInfo)

    axios.get( `/users/explore/${ profileGlobal }` )
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
    <div className="profile-select-explore">
      <div className="profile-header">
        <div className="avatar-display">
          <img src={ avatarImages[ user.avatar ]} width="100px" height="100px" />
        </div>
        <div className="username-display">
          <p>{ user.username }</p>
        </div> 
      </div>


      <div className="profile-user-info">
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
        <p><b>Admirers: </b></p>
        <p><b>Admiring: </b></p>
      </div>

      <div className="profile-admire">
        <span>Admire this user?</span><img src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" height="50px" width="50px"/>
      </div>


      <div className="profile-share">
        <div className="share-box"> 
          <div className="share-title">
            <span>Share this profile!</span>
          </div>
          <div className="share-links">
            <img 
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
              height="100px" weight="100px"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
              height="100px" weight="100px"
            />
            <img 
              src="https://i.pinimg.com/originals/9e/d9/7c/9ed97c85ef3f30fa564ecafa3239ae4d.png"
              height="100px" weight="100px"
            />
            <img 
              src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png"
              height="100px" weight="100px"
            />
          </div>
        </div>
        
      </div> 
    </div>
  );
};


export default Profile;