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

  const { 
    episodeInfoGlobal, 
    setDisplay, 
    DEFAULT, 
    VIEW, 
    setEpisodeInfoGlobal,
    setCreate,
    BOXES,
    BADGES,
    MAIN 
  } = useContext( CritiqueContext );
  const [ rating, setRating ] = useState( 0 );
  const [ pageInfo, setPageInfo ] = useState( {} )
  


  useEffect(() => {
    let { image, show_img } = episodeInfoGlobal;

    if (image){
      image = image.original
    }
    if (show_img){
      image = show_img
    }

    setPageInfo({
      show_id: episodeInfoGlobal.show_id,
      show_title: episodeInfoGlobal.name ? episodeInfoGlobal.name : episodeInfoGlobal.show_title,
      show_img: image ? image : "https://cdn0.iconfinder.com/data/icons/gcons-2/24/silhouette5-512.png",
      season_id: episodeInfoGlobal.season_id,
      episode_id: episodeInfoGlobal.episode_id,
      badges: [],
      custom_input: [],
      review: '',
      watched_on: '',
      votes: 1,
      rating: 0,
      color: '#738580',
      avatar: Cookies.get('avatar'),
      upvoted: true,
      season_num: episodeInfoGlobal.season,
      episode_num: episodeInfoGlobal.number,
      page_id: episodeInfoGlobal.page_id
    })

  },[])


  const post = data => {

    if (episodeInfoGlobal.state === "add") {
      let page_id;

      return axios.post( '/pages/newpage', data )
        .then(res => {
          console.log('new-page complete', res.data[0].id)
          setPageInfo({...pageInfo, user_id: res.data[0].id})
          page_id = {page_id: res.data[0].id}
          return axios.post( '/votes/add', {...data, page_id: page_id.page_id })
        })
        .catch( () => {
          alert('Page Already exists!') 

          return new Promise((res,rej)=> {
            rej('page already exists!')
          })
        });
    };

    if (episodeInfoGlobal.state === "edit") {
      return axios.patch( '/pages/update', data )
        .then( res => {
          console.log(res)
          return axios.patch( '/votes/update', data )
        })
        .then( console.log )
        .catch( console.log );
    };
    
  };
  

  const handleRating = ( rate ) => {
    setRating( rate )
    setPageInfo({ ...pageInfo, rating: rate })
  }

  const avatarImage = avatarImages[ Cookies.get( 'avatar' ) ];

  return (
    <section className="edit-box" style={{backgroundColor: pageInfo.color}}>
      <div className="nav">
        <div className="menu">
            <EditMenu pageInfo={pageInfo} setPageInfo={setPageInfo}/>
        </div>
        <div className="page-avatar">
          <div className="avatar-container">
          <img src={ avatarImage } width="100px" height="100px"/>
          </div>
          
        </div>
        <div className="page-title">
          <span className="title-span">{ episodeInfoGlobal.name }</span>
          <p>Season: <b>{ episodeInfoGlobal.season }</b>  |  Episode: <b>{ episodeInfoGlobal.number }</b></p>
        </div>
        <div className="voting">
            <div>
              { pageInfo.upvoted && <img src="images/upvote.png" height="25px" width="25px" /> }
              { !pageInfo.upvoted && <img src="images/upvote.png" height="25px" width="25px" 
                onClick={ () => { setPageInfo({ ...pageInfo, upvoted: true, votes: pageInfo.votes + 1 })}}/>}
            </div>
            <div> {pageInfo.votes} </div>
            <div>
              { !pageInfo.upvoted && <img src="images/downvote.png" height="25px" width="25px"  /> }
              { pageInfo.upvoted && <img src="images/downvote.png" height="25px" width="25px" 
                onClick={ () => { setPageInfo({ ...pageInfo, upvoted: false, votes: pageInfo.votes -1 })}}/>}
            </div>
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
            onChange={ e => setPageInfo({ ...pageInfo, watched_on: e.target.value })} />
        </div>
      </div>


      <div className="review">
        <label className="review-heading" htmlFor="review">Review:</label>
        <input id="review" type="text" value={ pageInfo.review } onChange={e => setPageInfo({ ...pageInfo, review: e.target.value })}/>
      </div>

      <div className="badges">
      <img src="images/add.png" onClick={() => setCreate(BADGES)}/>
      </div>

      <div className="content">
        <div className="box-1">
          <img src="images/add.png" onClick={() => setCreate(BOXES)}/>
        </div>
        <div className="box-2">
          <img src="images/add.png" onClick={() => setCreate(BOXES)}/>
        </div>
        <div className="box-3">
          <img src="images/add.png" onClick={() => setCreate(BOXES)}/>
        </div>
      </div>

      <div className="buttons">
        <button onClick={ ()=> {
          post( pageInfo )
          .then(() => {
            setEpisodeInfoGlobal( {...pageInfo} )
            setDisplay( VIEW )
            setCreate( MAIN )
          }).catch(() => setDisplay(DEFAULT))
        }}>Save</button>
        <button onClick={ ()=> {
          setDisplay( DEFAULT )
          setCreate( MAIN )
        }}>Back</button>
      </div>
    </section>
  );
};


export default Edit;