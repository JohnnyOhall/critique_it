// External Imports
import React, { useContext } from "react";

//Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";


const View = props => {

  const { episodeInfo } = useContext( CritiqueContext );

  return (
    <div>
      View
      <div>
        <span>Title: { episodeInfo.name }</span>
        <span>Rating: { episodeInfo.rating.average }</span>
        <span>Season: { episodeInfo.season}, Episode: { episodeInfo.number }</span>
        <br/>
        <p>{ episodeInfo.summary }</p>
      </div>
    </div>
    
  );
};


export default View;