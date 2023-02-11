// External Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useListItem from "../../../../hooks/useListItem";
import { CritiqueContext } from "../../../../providers/CritiqueProvider";
import Cookies from "js-cookie";

// Styling
import './ShowListItem.scss';


const ShowListItem = props => {
  const { name, img } = props;
  
  const { 
    assignSeason, 
    assignEpisode,
    findShow,
    setSelect,
    select, 
    season, 
    seasonMax, 
    episode, 
    episodeMax,
    episodeInfo,
    setEpisodeInfo
  } = useListItem( props );

  const { 
    DEFAULT, 
    SUMMARY, 
    setDisplay, 
    VIEW, 
    EDIT, 
    setEpisodeInfoGlobal
  } = useContext( CritiqueContext )


  const buildpage = data => {
    console.log(data)

    let page_id, episode_id;
    const avatar = Cookies.get('avatar')

      return axios.post( '/pages/newpage', data )
        .then(res => {

          page_id = res.data[0].id
          episode_id = res.data[0].episode_id

          const votesInfo = {
            page_id,
            episode_id,
            upvoted: true
          }

          return axios.post( '/votes/add', votesInfo)
        })
        .then( () => {

          const globalInfo = {
            avatar,
            page_id
          }

          setEpisodeInfoGlobal(globalInfo)
          setDisplay(EDIT)
        })
        .catch( () => {
          alert('Error on Server!') 

          return new Promise((res,rej)=> {
            rej('Error on Server!')
          })
        });
  }

  return (
    <li className="show-list-item">
      <div className="show-img">
        <img
          src={ img }
          height="100px"
          width="100px"
          onClick={ () => {
            findShow( season, episode );
            setSelect( select ? false : true );
            setDisplay( DEFAULT );
          }}
        />
      </div>
      { !select &&
        <div className="show-name">
          <button onClick={ () => {
            setDisplay( SUMMARY )
            setEpisodeInfoGlobal( {show_id: props.show_id} )
          }}>
            { name }
          </button>
        </div>
      }
      { select &&
        <div className="show-slider-select">

          <div className="slider-season">
            <span className="season-title">Season</span>
            <span className="season-number">{ season }</span>
            <input
              type="range"
              min={ 1 }
              max={ seasonMax }
              onChange={ e => {
                assignSeason( e.target.value );
                setDisplay(DEFAULT);
              }}
              value={ season }
            />
          </div>

          <div className="slider-episode">
            <span className="episode-title">Episode</span>
            <span className="episode-number">{ episode }</span>
            <input
              type="range"
              min={ 1 }
              max={ episodeMax }
              onChange={ e => {
                assignEpisode( e.target.value );
                setDisplay(DEFAULT);
              }}
              value={ episode }
            />
          </div>

          <div className="episode-info">
            { episodeInfo.exists ? 
              <>
                <span onClick={ () => {
                  setDisplay(VIEW)
                  setEpisodeInfoGlobal(episodeInfo)}}>{ episodeInfo.name }
                </span>
                <img
                  className="added-show-button"
                  src="images/checkmark.png"
                  alt="Add"
                  onClick={ () => {
                    setDisplay(VIEW)
                    setEpisodeInfoGlobal( episodeInfo ) }}
                />
              </>
            : <span>{ episodeInfo.name }</span> 
            }
          
            { !episodeInfo.exists &&
              <img
                className="add-show-button"
                src="images/add.png"
                alt="Add"
                onClick={ () => buildpage(episodeInfo) }
              />
            }
          </div>
        </div>
      }
    </li>
  );
};


export default ShowListItem;