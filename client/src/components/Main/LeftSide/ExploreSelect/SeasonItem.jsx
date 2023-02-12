import React, {useState} from "react";
import axios from "axios";

import EpisodesItem from "./EpisodesItem";

const SeasonItem = props => {

  const { id, number } = props;

  const [ episodes, setEpisodes ] = useState([]);
  const [ displayResults, setDisplayResults ] = useState(false)

  const searchEpisode = () => {

    if (!displayResults) {
      axios.get( `http://api.tvmaze.com/seasons/${ id }/episodes` )
      .then( res => {
        setEpisodes( res.data )
        setDisplayResults(true)
      })
      .catch( console.log )
    }

    if (displayResults) {
      setEpisodes([])
      setDisplayResults(false)
    }
    
  }

  const episodesItem = episodes.map( episode => {
    return (
      <EpisodesItem
        key={ episode.id }
        id={ episode.id }
        number={ episode.number }
        name={ episode.name }
      />
    ); 
  });

  return (
    <li>
    <span onClick={searchEpisode} >Season { number }</span> 
    { episodes.length !== 0 && <ul className="episode-list-show">{ episodesItem }</ul> }
    </li>
  );
};

export default SeasonItem;