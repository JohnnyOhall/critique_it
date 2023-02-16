// External Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Rating } from 'react-simple-star-rating'

// Components
import ShowBoxItem from "./ShowBoxItem";
import ShowBadgeItem from "./ShowBadgeItem";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Constants
import { avatarImages } from "../../../../constants/constants";

// Styles
import './View.scss';


const View = props => {

  const { episodeInfoGlobal, EDIT, setDisplay, setEpisodeInfoGlobal } = useContext(CritiqueContext);
  const [ pageInfo, setPageInfo ] = useState({});
  const [ boxes, setBoxes ] = useState([]);
  const [ badges, setBadges ] = useState([]);

  useEffect( () => {
    let extract, extractBox, extractBadge;
    let { page_id } = episodeInfoGlobal;

    axios.post('/pages/view', episodeInfoGlobal )
      .then(res => {
        extract = res.data.pageData
        page_id = {page_id: res.data.pageData.id}
        
        return axios.post('/votes/user', page_id)
      })
      .then(res => {
        const upvoted = res.data.voteData.upvoted
        setPageInfo({...extract, upvoted});
        setEpisodeInfoGlobal({...episodeInfoGlobal, page_id: page_id.page_id })
      })
      .catch( console.log );

    axios.get(`boxes/${page_id}`)
      .then(res => {
        extractBox = res.data.data.rows;
        setBoxes(extractBox)
      })
      .catch( console.log );

    axios.get(`badges/${page_id}`)
      .then(res => {
        extractBadge = res.data.data.rows;
        setBadges(extractBadge)
      })
      .catch( console.log );

  }, [])

  const avatarImage = avatarImages[ Cookies.get( 'avatar' ) ];

  const boxItem = boxes.map( box => {
    return (
      <ShowBoxItem
        key={ box.id }
        show_id={ box.id }
        text={ box.text }
        url={ box.url }
        style={ box.style}
      />
    ); 
  });

  const badgeItem = badges.map( badge => {
    return (
      <ShowBadgeItem
        key={ badge.id }
        id={ badge.id }
        actor_1={ badge.actor_1 }
        actor_2={ badge.actor_2 }
        url_actor_1={ badge.url_actor_1 }
        url_actor_2={ badge.url_actor_2 }
        badge_id={ badge.badge_id}
      />
    ); 
  });

  return (
    <section className="edit-box" style={{backgroundColor: pageInfo.color}}>
      <div className="nav">
        <div className="edit">
            <img 
              onClick={() => {
                setDisplay(EDIT)
                setEpisodeInfoGlobal({...episodeInfoGlobal, state: "edit"})
              }}
              src="https://icons-for-free.com/download-icon-edit+pen+pencil+icon-1320183237584811650_256.png" height="50px" width="50px"/>
        </div>
        <div className="page-avatar">
          <div className="avatar-container">
            <img src={ avatarImage } width="100px" height="100px"/>
          </div>
        </div>
        <div className="page-title">
          <span className="title-span">{pageInfo.show_title}</span>
          <p>Season: <b>{pageInfo.season_num}</b>  |  Episode: <b>{pageInfo.episode_num}</b></p>
        </div>
        <div className="voting">
            <div>
              <img src="https://www.uidownload.com/files/795/808/908/thumb-up-outline-symbol-icon.png" height="50px" width="50px" />
            </div>
            <div> {pageInfo.votes} </div>
        </div>
      </div>


      <div className="rating">
        <div className="stars">
          <Rating
            className="star-bar"
            readonly={ true }
            iconsCount={ 10 }
            initialValue={ pageInfo.rating }
          />
        </div>
        <div className="watched-on-view">
          <span className="watched-on-title">Watched on: </span><span className="watched-on-content">{pageInfo.watched_on}</span>  
        </div>
      </div>


      <div className="review">
        <span className="review-title">Review: </span><span className="review-content" disabled>{pageInfo.review}</span> 
      </div>

      <div className="badges">
        { badges.length !== 0 && <ul className="badge-list">{badgeItem}</ul> }
      </div>

      
      <div className="boxes">
        { boxes.length !== 0 && <ul className="box-list">{boxItem}</ul> }
      </div>
  
    </section>
  );
};


export default View;