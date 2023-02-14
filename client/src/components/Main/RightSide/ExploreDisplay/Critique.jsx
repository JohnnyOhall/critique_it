// External Imports
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import { Rating } from 'react-simple-star-rating'

// Components
import ShowBoxItem from "../CritiqueDisplay/ShowBoxItem";
import ShowBadgeItem from "../CritiqueDisplay/ShowBadgeItem";

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";
import { LoginContext } from "../../../../providers/LoginProvider";

// Constants
import { avatarImages } from "../../../../constants/constants";

// Styles
// import './Critique.scss'
import './styles.scss'

const Critique = props => {

  const { critiqueGlobal } = useContext(ExploreContext);
  const { loggedIn } = useContext(LoginContext)

  const [ CritiqueInfo, setCritiqueInfo ] = useState({});
  const [ boxes, setBoxes ] = useState([]);
  const [ badges, setBadges ] = useState([]);
  const [ voteStatus, setVoteStatus ] =useState('default')

  useEffect( () => {
    let extract, extractBox, extractBadge;

    if (loggedIn) {
      axios.get(`/pages/view/${critiqueGlobal}`)
      .then(res => {
        extract = res.data.pageData   
        return axios.get( `/votes/${critiqueGlobal}` )
      })
      .then(res => {

        if (Object.keys(res.data).length === 0) {
          setVoteStatus('default')
          setCritiqueInfo(extract)
        } 
        
        else {
          const upvoted = res.data.voteData.upvoted
          upvoted ? setVoteStatus('true') : setVoteStatus('false'); 
        }

        return axios.get(`/users/avatar/${extract.creator_id}`)
      })
      .then( res => setCritiqueInfo({...extract, avatar: res.data.avatar}))
      .catch( console.log );
    } 
    
    else {
      axios.get(`/pages/view/${critiqueGlobal}`)
      .then(res => {
        extract = res.data.pageData    

        return axios.get(`/users/avatar/${extract.creator_id}`)
      })
      .then( res => {
        
        setCritiqueInfo({...extract, avatar: res.data.avatar})
      })
      .catch( console.log );
    }
    
    axios.get(`boxes/${critiqueGlobal}`)
      .then(res => {
        extractBox = res.data.data.rows;
        setBoxes(extractBox)
      })
      .catch( console.log );

    axios.get(`badges/${critiqueGlobal}`)
      .then(res => {
        extractBadge = res.data.data.rows;
        setBadges(extractBadge)
      })
      .catch( console.log );

  }, [critiqueGlobal])

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

  const voteUp = (first_time) => {
    const votePackage = {
      upvoted: true,
      page_id: critiqueGlobal,
      creator_id: CritiqueInfo.creator_id,
      episode_id: CritiqueInfo.episode_id
    }

    if (first_time) {
      axios.post('/votes/explore/add', votePackage)
        .then( () => axios.patch( `/pages/votes?type=upvote&page_id=${critiqueGlobal}`))
        .then( res => setCritiqueInfo({...CritiqueInfo, votes: res.data.data.rows[0].votes}))
        .catch( console.log );

    } else {
      axios.patch('/votes/update', votePackage)
        .then( () => axios.patch( `/pages/votes?type=upvote&page_id=${critiqueGlobal}`))
        .then(res => setCritiqueInfo({...CritiqueInfo, votes: res.data.data.rows[0].votes}))
        .catch(console.log);
    }
  
  };

  const voteDown = (first_time) => {
    const votePackage = {
      upvoted: false,
      page_id: critiqueGlobal,
      creator_id: CritiqueInfo.creator_id,
      episode_id: CritiqueInfo.episode_id
    }

    if (first_time) {
      axios.post('/votes/explore/add', votePackage)
        .then( () => axios.patch( `/pages/votes?type=downvote&page_id=${critiqueGlobal}`))
        .then( res => setCritiqueInfo({...CritiqueInfo, votes: res.data.data.rows[0].votes}))
        .catch( console.log );

    } else {
      axios.patch('/votes/update', votePackage)
      .then( () => axios.patch( `/pages/votes?type=downvote&page_id=${critiqueGlobal}`))
      .then( res => setCritiqueInfo({...CritiqueInfo, votes: res.data.data.rows[0].votes}))
      .catch( console.log );
    }
  };

  return (
    <section className="edit-box" style={{backgroundColor: CritiqueInfo.color}}>
      <div className="nav">
        <div className="page-avatar">
          <div className="avatar-container">
            <img src={ avatarImages[ CritiqueInfo.avatar ] } width="100px" height="100px"/>
          </div>
        </div>
        <div className="page-title">
          <span className="title-span">{CritiqueInfo.show_title}</span>
          <p>Season: <b>{CritiqueInfo.season_num}</b>  |  Episode: <b>{CritiqueInfo.episode_num}</b></p>
        </div>
        <div className="voting">


          { loggedIn && <>
            {voteStatus === "true" && <img src="images/upvote-active.png" height="25px" width="25px" /> }
            {voteStatus === "false" && 
              <img 
                src="images/upvote.png" 
                height="25px" width="25px"
                onClick={ () => {
                  setVoteStatus("true");
                  voteUp(false);
                }}
              /> 
            }
            {voteStatus === "default" && 
              <img 
                src="images/upvote.png" 
                height="25px" width="25px"
                onClick={ () => {
                  setVoteStatus("true");
                  voteUp(true);
                }}
              /> 
            }
            <div> {CritiqueInfo.votes} </div>
            {voteStatus === "true" && 
              <img 
                src="images/downvote.png" 
                height="25px" width="25px"
                onClick={ () => {
                  setVoteStatus("false");
                  voteDown(false);
                }}
              /> 
            }
            {voteStatus === "false" && <img src="images/downvote-active.png" height="25px" width="25px" />}
            {voteStatus === "default" && 
              <img 
                src="images/downvote.png" 
                height="25px" width="25px"
                onClick={ () => {
                  setVoteStatus("false");
                  voteDown(true);
                }}
              /> 
            } </> }


            { !loggedIn && <>
              <div>
                <img 
                  src="https://www.uidownload.com/files/795/808/908/thumb-up-outline-symbol-icon.png" 
                  height="50px" 
                  width="50px" 
                />
              </div>
              <div> {CritiqueInfo.votes} </div>
            </>}


        </div> 
      </div>


      <div className="rating">
        <div className="stars">
          <Rating
            className="star-bar"
            readonly={ true }
            iconsCount={ 10 }
            initialValue={ CritiqueInfo.rating }
          />
        </div>
        <div className="watched-on">
          <span className="watched-on-title">Watched on: </span><span className="watched-on-content">{CritiqueInfo.watched_on}</span>  
        </div>
      </div>


      <div className="review">
        <span className="review-title">Review: </span><span className="review-content" disabled>{CritiqueInfo.review}</span> 
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


export default Critique;