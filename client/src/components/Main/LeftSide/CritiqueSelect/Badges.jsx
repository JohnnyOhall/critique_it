// External Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styles
import './Badges.scss'

const Badges = props => {
  
  const [ badge_id, setBadge_id ] = useState( 0 );
  const [ pageInfo, setPageInfo ] = useState( {} );

  const { 
    episodeInfoGlobal, 
    MAIN, 
    EDIT, 
    setDisplay, 
    setCreate,
    setBadges,
    badges 
  } = useContext( CritiqueContext )

  useEffect(() => {
    setPageInfo({
      ...pageInfo,
      badge_id: 0,
      actor_1: '',
      actor_2: '',
      url_actor_1: '',
      url_actor_2: '',
      page_id: episodeInfoGlobal.page_id,
    })

  }, [])

  const post = () => {
    const page_id = episodeInfoGlobal.page_id

    setPageInfo({...pageInfo, page_id})
    
    axios.post('./badges/add', pageInfo )
      .then((res) => {
        const extract = res.data.data.rows[0]
        setBadges([...badges, extract]);
        setCreate(MAIN);
        setDisplay(EDIT);
      })
  }

  return (
    <section className="badge-outer">
      <div className="badge-inner">

        <div className="select-badge">
          <div className="badge-title">
            <span> Select a Badge </span>
          </div>
          <div className="badge-content" onChange={ e => {
            setBadge_id( e.target.value )
            setPageInfo({...pageInfo, badge_id: e.target.value })
          }}> 
            <div className="badge-row">
              <div className="badge-item">
                <img src="images/badges/best_action.png" height="100px" width="100px"/>
                <span>Best Action</span>
                <input type='radio' name='badge' value={ 1 } ></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/best_actor.png" height="100px" width="100px"/>
                <span>Outstanding!</span>
                <input type='radio' name='badge' value={ 2 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/dynamic_duo.png" height="100px" width="100px"/>
                <span>Dynamic Duo</span>
                <input type='radio' name='badge' value={ 3 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/going_to_miss_you.png" height="100px" width="100px"/>
                <span>Miss You</span>
                <input type='radio' name='badge' value={ 4 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/im_in_love.png" height="100px" width="100px"/>
                <span>I'm in Love</span>
                <input type='radio' name='badge' value={ 5 }></input>
              </div>
            </div>
            <div className="badge-row">
              <div className="badge-item">
                <img src="images/badges/love_to_hate.png" height="100px" width="100px"/>
                <span>Love 2 Hate</span>
                <input type='radio' name='badge' value={ 6 } ></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/most_hilarious.png" height="100px" width="100px"/>
                <span>Hilarious!</span>
                <input type='radio' name='badge' value={ 7 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/most_touching.png" height="100px" width="100px"/>
                <span>Touching!</span>
                <input type='radio' name='badge' value={ 8 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/shipping_it.png" height="100px" width="100px"/>
                <span>Shipping It!</span>
                <input type='radio' name='badge' value={ 9 }></input>
              </div>
              <div className="badge-item">
                <img src="images/badges/worst_performance.png" height="100px" width="100px"/>
                <span>Terrible!</span>
                <input type='radio' name='badge' value={ 10 }></input>
              </div>
            </div>
          </div>
        </div>


        { badge_id === 0 && 
          <div className="badge-input">
            <p>Please make a badge selection above!</p>
          </div> 
        }

        { badge_id === "1" && 
          <div className="badge-input">
            <p>Best Action Performance</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "2" && 
          <div className="badge-input">
            <p>Best Performance</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "3" && 
          <div className="badge-input">
            <p>Dynamic Duo - Best joint Performance</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="1st character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="2nd character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_2: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Link for 1st character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Link for 2nd character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_2: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "4" && 
          <div className="badge-input">
            <p>The character you're going to miss!</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "5" && 
          <div className="badge-input">
            <p>You're falling in love with this character!</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "6" && 
          <div className="badge-input">
            <p>The Character you love to hate!</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "7" && 
          <div className="badge-input">
            <p>The most hilarious performance</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "8" && 
          <div className="badge-input">
            <p>The most touching performance</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Enter link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }


        { badge_id === "9" && 
          <div className="badge-input">
            <p>The best couple - You're calling it!</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="1st character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="2nd character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_2: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Link for 1st character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Link for 2nd character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_2: e.target.value })
              }}/>
          </div> 
        }

        { badge_id === "10" && 
          <div className="badge-input">
            <p>The worst performance...</p>
            <input 
              type="text"
              className="short"
              maxLength={30}
              placeholder="Character name (max 30 chars)"
              onChange={ e => {
                setPageInfo({ ...pageInfo, actor_1: e.target.value })
              }}/>
            <input
              type="url"
              className="url"
              placeholder="Link for character headshot"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url_actor_1: e.target.value })
              }}/>
          </div> 
        }

        <div className="badge-buttons">
          <button onClick={post}>add</button>
          <button onClick={()=> setCreate(MAIN)}>back</button>
        </div>

      </div>
    </section>
  );
};

export default Badges;


// { badge_id === "2" && 
// <div className="badge-input">
//   <p>Please enter your thoughts (225 characters max):</p>
//   <textarea 
//     placeholder="type here" 
//     maxLength={225}
//     onChange={e => {
//       setCharacters(e.target.value.length)
//       setDanger(characters >= 200 ? true : false)
//       setPageInfo({ ...pageInfo, text: e.target.value })
//     }}
//   /> 
//   <p style={{color: danger ? "red" : "black"}}>{characters}</p>
// </div> 
// }

// { badge_id === "3" && 
// <div className="badge-input"> 
//   <p>please leave a short message (25 characters max): </p>
//   <input 
//     className="short" 
//     type="text" 
//     placeholder="enter short text here"
//     maxLength={ 25 }
//     onChange={ e => {
//       setCharacters( e.target.value.length )
//       setDanger( characters >= 20 ? true : false )
//       setPageInfo({ ...pageInfo, text: e.target.value })
//     }}
//   /> 
//   <span style={{ color: danger ? "red" : "black" }}>{ characters }</span>
//   <p>Please enter a image url:</p>
//   <input 
//     className="url" 
//     type="url" 
//     placeholder="enter url here"
//     onChange={ e => {
//       setPageInfo({ ...pageInfo, url: e.target.value })
//     }}
//   />    
// </div> 
// }
