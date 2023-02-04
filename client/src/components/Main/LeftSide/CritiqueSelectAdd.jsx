// External imports
import React, { useState } from "react";
import axios from "axios";


const CritiqueSelectAdd = props => {

  const [ show, setShow ] = useState( {} );
  const [ search, setSearch ] = useState( '' );

  const removeHTMLTags = string => {
    return string.replace( /(<([^>]+)>)/ig, '' );
  };

  const findShow = showName => {
    let showData;

    axios.get(`http://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`)
      .then(res => {
        let { name, id, image, rating, summary } = res.data[0].show;

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

        return axios.get(`http://api.tvmaze.com/shows/${id}/seasons`);
      })
      .then(res => {
        showData.seasons = res.data.length;

        for ( const season of res.data ) {
          showData.episodes += season.episodeOrder
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

  return (
    <div className="critique-select">

      <div className="add">

        <div className="show-search-info box">

          <div className="top-top">
            <form className="search" onSubmit={ e => e.preventDefault() }>
              <input
                placeholder="Enter Show Name"
                type="text"
                value={ search }
                onChange={ e => setSearch( e.target.value ) }
              />
              <button onClick={ e => findShow( search ) }>
                <img 
                  src="images/search.png"  
                  width="32px" 
                  height="32px"
                />
              </button>
              
            </form>
          </div>
          
          <div className="top-center">
              <div>
                <span className="title">Show Title:</span>
                <span className="content">{ show.name }</span>
              </div>
              <div>
                <span className="title">Show ID:</span>
                <span className="content">{ show.id }</span>
              </div>
              <div>
                <span className="title">Rating:</span>
                <span className="content">{ show.rating } / 10</span>
              </div>
              <div>
                <span className="title">Seasons:</span>
                <span className="content"> { show.seasons }</span>
              </div>
              <div>
                <span className="title">Episodes:</span>
                <span className="content">{ show.episodes }</span>
              </div>
          </div>

          <div className="top-bottom">
            <h2>Show Summary</h2>
            <p>{ show.summary }</p>
          </div>

        </div>
      

        <div className="show-image box">
          <img src={ show.image } />
        </div>

        <div className="show-stats box">
          <p>Show Stats</p>
          <p>Users who added this show:</p>
          <p>Average rating:</p>
          <p>Average episodes critiqued:</p>
          <p>Times searched:</p>
        </div>

        <div className="show-buttons box">
          <div className="add-button">
          <img
            className="select-button"
            src="images/add.png"
            alt="Select"
            onClick={ () => selectShow(show) }
          /><h2>add</h2>
          </div>
          <div className="close-button">
          <img
            className="close-button"
            src="images/cancel.png"
            alt="Close"
            width="64px" height="64px"
            onClick={ props.onClose }
          /> <h2>close</h2>
          </div>
          
          
        </div>

        

      </div>

    </div>
  );
};


export default CritiqueSelectAdd;