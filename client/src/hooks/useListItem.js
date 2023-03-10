// External Imports
import { useState } from "react";
import axios from "axios";

const useListItem = props => {
  const [ select, setSelect ] = useState( false );
  const [ season, setSeason ] = useState( 1 );
  const [ seasonMax, setSeasonMax ] = useState( 1 );
  const [ episode, setEpisode ] = useState( 1 );
  const [ episodeMax, setEpisodeMax ] = useState( 1 );
  const [ episodeInfo, setEpisodeInfo ] = useState( {} );

  const findShow = ( seasonNumber, episodeNumber ) => {
    let showData;

    axios.get( `https://api.tvmaze.com/shows/${ props.show_id }/seasons` )
      .then( res => {
        showData = {
          seasonLength: res.data.length,
          seasonId: res.data[ seasonNumber - 1 ].id
        };
        return axios.get( `https://api.tvmaze.com/seasons/${ showData.seasonId }/episodes` );
      })

      .then( res => {
        showData.episodeLength = res.data.length;
        showData.episode = res.data[ episodeNumber - 1 ];
        showData.episode_id = res.data[ episodeNumber - 1 ].id;
        return axios.get( `/pages/${ showData.episode.id }` );
      })

      .then(res => {
        const exists = res.data.pageData[ 0 ] ? true : false;
        setSeasonMax( showData.seasonLength );
        setEpisodeMax( showData.episodeLength );
        setEpisodeInfo({ 
          ...showData.episode, 
          exists, 
          show_id: props.show_id, 
          season_id: showData.seasonId,
          episode_id: showData.episode_id,
          page_id: res.data.pageData[0] ? res.data.pageData[0].id : null
        });
      })

      .catch(err => console.error( err ));
  };

  const assignSeason = value => {
    setSeason( value );
    setEpisode( 1 );
    findShow( value , 1 );
  };

  const assignEpisode = value => {
    setEpisode( value );
    findShow( season, value );
  };

  return { 
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
  };
};


export default useListItem;
