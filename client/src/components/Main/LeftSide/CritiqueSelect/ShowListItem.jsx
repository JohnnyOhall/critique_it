// External Imports
import React, { useContext, useEffect, useState } from "react";
import useListItem from "../../../../hooks/useListItem";
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

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
  } = useListItem( props );

  const { 
    DEFAULT, 
    SUMMARY, 
    setDisplay, 
    VIEW, 
    EDIT, 
    setEpisodeInfoGlobal
  } = useContext( CritiqueContext )

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
            
            { episodeInfo.exists 
            ? <span onClick={ () => {
              setDisplay(VIEW)
              setEpisodeInfoGlobal(episodeInfo)}}>{ episodeInfo.name } "📺"</span> 
            : <span>{ episodeInfo.name }</span> }
            
            { episodeInfo.exists
              ? <button onClick={ () => {
                  setDisplay(EDIT)
                  setEpisodeInfoGlobal({...episodeInfo, state: "edit"})
                }}>Edit</button> // Episode already critiqued and in DB
              : <button onClick={ () => {
                  setDisplay(EDIT)
                  setEpisodeInfoGlobal({...episodeInfo, state: "add"})
                } }>Add</button> // Episode has never been critiqued
            }
          </div>
        </div>
      }
    </li>
  );
};


export default ShowListItem;