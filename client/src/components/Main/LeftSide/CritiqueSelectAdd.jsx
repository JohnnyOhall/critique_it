import React, { useState } from "react";
import axios from "axios";

const CritiqueSelectAdd = props => {

  const [ show, setShow ] = useState({});
  const [ search, setSearch ] = useState('');

  const removeHTMLTags = string => {
    return string.replace( /(<([^>]+)>)/ig, '');
  };

  const findShow = (showName) => {
    let showData;

    axios.get(`http://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`)
      .then(res => {
        let { name, id, image, rating, summary } = res.data[0].show;

        image = image.medium; 
        rating = rating.average;
        summary = removeHTMLTags(summary);
        
        showData = {
          name,
          id,
          image,
          summary,
          rating,
          seasons: 0,
          episodes: 0
        };

        return axios.get(`http://api.tvmaze.com/shows/${id}/seasons`);
      })
      .then((res)=> {
        showData.seasons = res.data.length

        console.log(res.data)

        for (const season of res.data){
          showData.episodes += season.episodeOrder
        } 

        setShow(showData);
      })
      .catch(console.error);
  };

  // Starts building page in database when user selects the show, then transitions to the main page
  const selectShow = ( data ) => {
    axios.post( '/pages/create', data )
      .then(res => {
        props.onSelect();
      })
      .catch(console.error);
  }

  return (
    <div className="critique-select">

      <form onSubmit={ e => e.preventDefault( )}>
        <input 
          placeholder="Enter Show Name"  
          type="text"
          value={ search }
          onChange={ e => setSearch(e.target.value) }
        />
        <button onClick={ e => findShow( search ) }>Search</button>
      </form>

      <p>Show Title: { show.name }</p>
      <p>Show ID: { show.id }</p>
      <p>Rating: { show.rating } / 10</p>
      <div>{ show.summary }</div>
      <img src={ show.image } />
      <p>Seasons: { show.seasons }</p>
      <p>Episodes: { show.episodes }</p>

      <img
        className="select-button"
        src="images/add.png"
        alt="Select"
        onClick={ () => selectShow( show ) }
      />

      <img
        className="close-button"
        src="images/close.png"
        alt="Close"
        onClick={ props.onClose }
      />

    </div>
  );
};

export default CritiqueSelectAdd;