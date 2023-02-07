// External Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowListItem = props => {
  const { name, img } = props;

  const [ select, setSelect ] = useState( false );
  const [ season, setSeason ] = useState( 1 );
  const [ seasonMax, setSeasonMax ] = useState( 1 )
  const [ episode, setEpisode ] = useState( 1 );
  const [ episodeMax, setEpisodeMax ] = useState( 1 );
  const [ episodeInfo, setEpisodeInfo ] = useState( {} );

  const findShow = () => {
    let showData;

    axios.get(`http://api.tvmaze.com/shows/${props.show_id}/seasons`)
    .then(res => {

      showData = {
        seasonLength: res.data.length,
        seasonId: res.data[ season -1 ].id
      };

      return axios.get(`http://api.tvmaze.com/seasons/${showData.seasonId}/episodes`)
    })
    .then(res => {
      showData.episodeLength = res.data.length;
      showData.episode = res.data[ episode -1 ];

      setSeasonMax( showData.seasonLength );
      setEpisodeMax( showData.episodeLength );
      setEpisodeInfo( showData.episode );
    })
    .catch(err => console.error(err));
  };

  const assignSeason = value => {
    setSeason( value );
    setEpisode( 1 );
    findShow();
  };

  const assignEpisode = value => {
    setEpisode( value );
    findShow();
  };

  console.log('ep info: ', episodeInfo)

  return (
    <li className="show-item">
      <div className="show-img">
        <img
          src={ img }
          height="100px"
          width="100px"
          onClick={ () => {
            findShow();
            setSelect( select ? false : true );
          } }
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

          <div><span>{ episodeInfo.name }</span></div>
        </div>
      }
    </li>
  );
};

export default ShowListItem;