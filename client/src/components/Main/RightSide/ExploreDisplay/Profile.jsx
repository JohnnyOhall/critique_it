// External Imports
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";
import { LoginContext } from "../../../../providers/LoginProvider";

// Constants
import { avatarImages } from "../../../../constants/constants";

//styles
import './Profile.scss';


const Profile = props => {

  const { profileGlobal } = useContext( ExploreContext );
  const { loggedIn } = useContext( LoginContext )

  const [ user, setUser ] = useState( {} );
  const [ admiring, setAdmiring ] = useState(false);

  useEffect( () => {
    let tempData, stats;
    let admireData = {
      admirers: 0,
      admiring: 0,
      admireStatus: false
    };

    if ( loggedIn ) {
      axios.get( `/users/explore/${ profileGlobal }` )
      .then( res => { 
        tempData = res.data.userData;
        return axios.get(`/pages/explore/userstats/${profileGlobal}`);
      })
      .then( res => { 
        stats = res.data.results;
        return axios.get( `/admire/find?method=e_status&id=${profileGlobal}`)
      })
      .then(res => {
        admireData.admireStatus = res.data.data.rows[0].exists;
        return axios.get(`/admire/find?method=e_admirer&id=${profileGlobal}`)
      })
      .then( res => {
        admireData.admirers = res.data.data.rows.length;
        return axios.get(`/admire/find?method=e_admiring&id=${profileGlobal}`)
      })
      .then ( res => {
        admireData.admiring = res.data.data.rows.length;

        setUser({
          ...tempData, 
          score: stats.score, 
          shows: stats.shows, 
          episodes: stats.episodes,
          admirers: admireData.admirers,
          admiring: admireData.admiring
        });

        admireData.admireStatus ? setAdmiring(true) : setAdmiring(false);
      })
      .catch( console.log );
    }

    if (!loggedIn) {
      axios.get( `/users/explore/${ profileGlobal }` )
      .then( res => { 
        tempData = res.data.userData;
        return axios.get(`/pages/explore/userstats/${profileGlobal}`);
      })
      .then( res => { 
        stats = res.data.results;
        return axios.get(`/admire/find?method=e_admirer&id=${profileGlobal}`)
      })
      .then( res => {
        admireData.admirers = res.data.data.rows.length;
        return axios.get(`/admire/find?method=e_admiring&id=${profileGlobal}`)
      })
      .then ( res => {
        admireData.admiring = res.data.data.rows.length;
        setUser({
          ...tempData, 
          score: stats.score, 
          shows: stats.shows, 
          episodes: stats.episodes,
          admirers: admireData.admirers,
          admiring: admireData.admiring
        });
      })
      .catch( console.log );
    }

  }, []);

  const admire = () => {
    if (admiring) {
      axios.delete( `/admire/delete/${profileGlobal}`)
        .then( () => setAdmiring( false ))
        .catch( console.log )
    }

    if (!admiring) {
      axios.post( `/admire/add/${profileGlobal}`)
        .then( () => setAdmiring( true ))
        .catch( console.log )
    }
  }

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
        <p><b>Admirers: </b>{ user.admirers }</p>
        <p><b>Admiring: </b>{ user.admiring }</p>
      </div>

      { loggedIn &&
      <div className="profile-admire">
        { admiring && <>
          <span>Admiring this user!</span>
          <img 
            src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" 
            height="50px" 
            width="50px"
            className="admired-img"
            onClick={admire}
          />
        </>}
        { !admiring && <>
          <span>Admire this user?</span>
          <img 
            src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" 
            height="50px" 
            width="50px"
            className="default-img"
            onClick={admire}
          />
        </>}
      </div> }


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