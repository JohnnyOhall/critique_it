// External Imports
import React, { useContext } from "react";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";


const Edit = props => {

  const { episodeInfo } = useContext( CritiqueContext );

  console.log(episodeInfo)
  
  return (
    <div>
      Edit 
      <div>
        <p>Title: { episodeInfo.name }</p>
        <p>Rating: { episodeInfo.rating.average }</p>
        <p>Season: { episodeInfo.season}, Episode: {episodeInfo.number}</p>
        <p>{episodeInfo.summary}</p>
        {/* <p>Ep ID: {episodeInfo.id}, Season ID: {episodeInfo.season_id}, show_id: {episodeInfo.show_id}</p> */}
      </div>
    </div>
  );
};


export default Edit;