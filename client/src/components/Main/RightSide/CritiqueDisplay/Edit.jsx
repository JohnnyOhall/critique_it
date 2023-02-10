// External Imports
import React, { useContext, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import axios from 'axios';
import Cookies from "js-cookie";

// Components
import EditMenu from "./EditMenu";
import ShowBoxItem from "./ShowBoxItem";

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
    MAIN,
    setBoxes,
    boxes
  } = useContext( CritiqueContext );

  const [ rating, setRating ] = useState( 0 );
  const [ pageInfo, setPageInfo ] = useState( {} )
  
  useEffect(() => {
    let { page_id, avatar } = episodeInfoGlobal;
    let extract;

    axios.get(`pages/edit/${page_id}`)
      .then(res => {
        extract = res.data.pageData
        return axios.get(`votes/${page_id}`)
      })
      .then(res => {
        const upvoted = res.data.voteData.upvoted
        setPageInfo({...extract, avatar, upvoted })
      })

  }, [])

  useEffect(() => {
    let { page_id } = episodeInfoGlobal;
    let extract;

    axios.get(`boxes/${page_id}`)
      .then(res => {
        extract = res.data.data.rows;
        setBoxes([extract])
      });


  },[boxes])


  const boxItem = boxes.map( box => {

    console.log('box-item: ', box)
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


  const post = data => {
    
    axios.patch( '/pages/update', data )
      .then( () => {
        return axios.patch( '/votes/update', data )
      })
      .then( () => {
        setEpisodeInfoGlobal( data )
        setDisplay( VIEW )
        setCreate( MAIN )
      })
      .catch( console.log );
  };
    
  const handleRating = ( rate ) => {
    setRating( rate )
    setPageInfo({ ...pageInfo, rating: rate })
  }

  const avatarImage = avatarImages[ Cookies.get('avatar') ];

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
          <span className="title-span">{ pageInfo.show_title }</span>
          <p>Season: <b>{ pageInfo.season_num }</b>  |  Episode: <b>{ pageInfo.episode_num }</b></p>
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

      <div className="boxes">
        <ul className="box-list">{boxItem}</ul>
        { boxes.length < 3 && <div className="box-1">
          <img src="images/add.png" onClick={() => setCreate(BOXES)}/>
        </div> }
      </div>
      

      <div className="buttons">
        <button onClick={ ()=> {
          post( pageInfo )
          .then(() => {
            
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


// const firstUpdate = useRef(true);
//   useLayoutEffect(() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false;
//     } else {
//      // do things after first render
//     }
//   });