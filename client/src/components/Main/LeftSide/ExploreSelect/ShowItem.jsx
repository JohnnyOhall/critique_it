import React, { useState } from "react";
import axios from "axios";

import EpisodeItem from "./EpisodeItem";

const ShowItem = props => {
  const { show_title, show_id, user_id } = props;
  const [ episodes, setEpisodes ] = useState( [] );
  const [ displayResults, setDisplayResults ] = useState(false)

  const searchShow = () => {

    if (!displayResults) {
      axios.get(`pages/search/showitem?showid=${ show_id }&userid=${ user_id }`)
        .then(res => {
          setEpisodes( res.data.data.rows )
          setDisplayResults(true)
        })
    }

    if (displayResults) {
      setEpisodes([])
      setDisplayResults(false)
    }
  }

  const episodeItem = episodes.map( episode => {
    return (
      <EpisodeItem
        key={ episode.id }
        id={ episode.id }
        show_id={ episode.show_id }
        avatar={ episode.avatar }
        show_title={ episode.show_title }
      />
    ); 
  });

  return (
    <li>
      <span onClick={searchShow}>{ show_title }</span>
      { episodes.length !== 0 && <ul className="episode-list">{ episodeItem }</ul> }
    </li>
  );
};

export default ShowItem;