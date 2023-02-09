// External Imports
import React, { useContext, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import Cookies from "js-cookie";
import axios from 'axios';

// Components
import EditMenu from "./EditMenu";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Global Variables
import { avatarImages } from "../../../../constants/constants";

// Styles
import './Edit.scss';


const Edit = props => {

  const { episodeInfoGlobal } = useContext( CritiqueContext );
  const [ rating, setRating ] = useState(0);
  const [ pageInfo, setPageInfo ] = useState({})

  useEffect(() => {
    let {image} = episodeInfoGlobal;
    image = image.original

    setPageInfo({
      show_id: episodeInfoGlobal.show_id,
      show_title: episodeInfoGlobal.name,
      show_img: image,
      season_id: episodeInfoGlobal.season_id,
      episode_id: episodeInfoGlobal.show_id,
      // badges: [],
      // custom_input: [],
      review: 'test',
      watched_on: '',
      votes: 0,
      rating: 0,
      color: '#738580',
      avatar: Cookies.get('avatar')
    })
  },[])

  const post = data => {
    axios.post('/pages/newpage', data)
    .then(console.log)
    .catch(console.log);
  };
  

  const handleRating = (rate) => {
    setRating(rate)
    setPageInfo({ ...pageInfo, rating: rate })
  }

  console.log('global: ', pageInfo);

  const avatarImage = avatarImages[Cookies.get( 'avatar' )];

  return (
    <section className="edit-box">
      <div className="nav">
        <div className="menu">
            <EditMenu />
        </div>
        <div className="page-avatar">
          <div className="avatar-container">
          <img src={ avatarImage } width="100px" height="100px"/>
          </div>
          
        </div>
        <div className="page-title">
          <span className="title-span">{ episodeInfoGlobal.name }</span>
          <p>Season: <b>{episodeInfoGlobal.season}</b>  |  Episode: <b>{episodeInfoGlobal.number}</b></p>
        </div>
        <div className="voting">
            votes
        </div>
      </div>


      <div className="rating">
        <div className="stars">
          <span>Rating:</span>
            <Rating
              className="star-bar"
              onClick={ handleRating }
              iconsCount={ 10 }
            />
            <span>{ rating }</span>
        </div>
        <div className="watched-on">
          <label htmlFor="watched-on">Watched on:</label>
          <input 
            type="date" 
            id="watched-on"
            onChange={ e => setPageInfo({...pageInfo, watched_on: e.target.value})} />
        </div>
      </div>


      <div className="review">
        <label htmlFor="review">Review:</label>
        <input id="review" type="text"/>
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

      <div className="buttons">
        <button onClick={()=> post(pageInfo)}>save</button>
        <button>back</button>
      </div>
    </section>
  );
};


export default Edit;