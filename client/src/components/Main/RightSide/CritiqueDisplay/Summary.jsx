// External Imports
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'

// Helpers
import { removeHTMLTags } from "../../../../helpers/helpers";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styles
import './Summary.scss';


const Summary = props => {

  const { episodeInfo } = useContext( CritiqueContext )
  const [ showInfo, setShowInfo ] = useState({})

  useEffect( () => {
    let getInfo;

    axios.get( `http://api.tvmaze.com/shows/${ episodeInfo.show_id }` )
    .then( res => {

      let { image, summary } = res.data

      image = image.original;
      summary = removeHTMLTags( summary );

      getInfo = {
        image,
        summary
      }

      setShowInfo( getInfo )

    })
    .catch(err => console.error( err ));

  },[ episodeInfo ])
  

  return (
    <section className="summary-index">
      <div className="image-container">
        <img object-fit="contain" src={ showInfo.image } />
      </div>
      <div className="summary-container">
        <p>{ showInfo.summary }</p>
      </div> 
    </section>
  );
};

export default Summary;