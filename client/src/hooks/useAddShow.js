// External Imports
import axios from "axios";
import { useState } from "react";

//Helpers
import { removeHTMLTags } from "../helpers/helpers";


const useAddShow = props => {

  const [ show, setShow ] = useState({});
  const [ search, setSearch ] = useState('');
  
  const findShow = showName => {
    let showData;
  
    axios.get( `https://api.tvmaze.com/search/shows?q=${ encodeURIComponent( showName )}` )
      .then( res => {
        let { name, id, image, rating, summary } = res.data[ 0 ].show;
  
        image = image.original;
        rating = rating.average;
        summary = removeHTMLTags( summary );
  
        showData = {
          name,
          id,
          image,
          summary,
          rating,
          seasons: 0,
          episodes: 0
        };
  
        return axios.get( `https://api.tvmaze.com/shows/${id}/seasons` );
      })
      .then( res => {
        showData.seasons = res.data.length;
  
        for ( const season of res.data ) {
          showData.episodes += season.episodeOrder;
        };
  
        setShow( showData );
      })
      .catch( console.error );
  };
  
  // prevent duplicate logic needs to be added
  const selectShow = data => {
    axios.post( '/pages/create', data )
      .then( () => props.onSelect() )
      .catch( console.error );
  };

  return { selectShow, findShow, setSearch, show, search };

};


export default useAddShow;
