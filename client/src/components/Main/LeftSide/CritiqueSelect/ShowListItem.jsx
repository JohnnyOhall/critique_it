// External Imports
import React from "react";
import useListItem from "../../../../hooks/useListItem";

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
    episodeInfo
  } = useListItem(props);

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
          }}
        />
      </div>
      { !select &&
        <div className="show-name">
          <button>
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
              onChange={ e => assignSeason( e.target.value ) }
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
              onChange={ e => assignEpisode( e.target.value ) }
              value={ episode }
            />
          </div>

          <div className="episode-info">
            <span>
              { episodeInfo.name } { episodeInfo.exists && "📺" }
            </span>
            { episodeInfo.exists
              ? <button>Edit</button> // Episode already critiqued and in DB
              : <button>Add</button> // Episode has never been critiqued
            }
          </div>
        </div>
      }
    </li>
  );
};


export default ShowListItem;