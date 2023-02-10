// External Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Rating } from 'react-simple-star-rating'

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Constants
import { avatarImages } from "../../../../constants/constants";

// Styles
import './View.scss';


const View = props => {

  const { episodeInfoGlobal, EDIT, setDisplay, setEpisodeInfoGlobal } = useContext(CritiqueContext);
  const [ pageInfo, setPageInfo ] = useState({})

  useEffect( () => {
    let extract;
    let page_id;

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
        console.log('after: ', episodeInfoGlobal)
      })

  }, [])

  const avatarImage = avatarImages[ Cookies.get( 'avatar' ) ];


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
        <div className="watched-on">
          <span className="watched-on-title">Watched on: </span><span className="watched-on-content">{pageInfo.watched_on}</span>  
        </div>
      </div>


      <div className="review">
        <span className="review-title">Review: </span><span className="review-content" disabled>{pageInfo.review}</span> 
      </div>

      <div className="badges">
        badges
      </div>

      <div className="content">
        <div className="box-1">
          box 1
        </div>
        <div className="box-2">
          box 2
        </div>
        <div className="box-3">
          box 3
        </div>
      </div>
    </section>
  );
};


export default View;