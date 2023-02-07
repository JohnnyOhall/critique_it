import React, { useContext } from "react";
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

const Summary = props => {

  const { episodeInfo } = useContext( CritiqueContext )

  axios.get( `http://api.tvmaze.com/shows/${ props.show_id }/seasons` )
      .then( res => {
        showData = {
          seasonLength: res.data.length,
          seasonId: res.data[ seasonNumber - 1 ].id
        };
        return axios.get( `http://api.tvmaze.com/seasons/${ showData.seasonId }/episodes` );
      })
      .catch(err => console.error( err ));
  
  return (
    <div>
      Summary
      <p>{ episodeInfo.show_id }</p>
      <br/>
    </div>
  );
};

export default Summary;