import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ExploreContext } from "../../../../providers/ExploreProvider";

const CritiquesItem = props => {

  const { page_id, rating, votes, watched, creator } = props;
  const [ username, setUsername ] = useState('')

  const { 
    setDisplay, 
    CRITIQUE, 
    setCritiqueGlobal 
  } = useContext(ExploreContext)

  useEffect( () => {
    axios.get( `/users/find/${creator}` )
      .then( res => setUsername(res.data.data.rows[0].username) )
      .catch( console.log );

  },[]);

  const setGlobal = () => {
    setCritiqueGlobal(page_id)
    setDisplay(CRITIQUE)
  };

  return (
    <li onClick={setGlobal}>
      <div className="critiques-list-show-item">
        <span><b> ✏️ Critiquer: </b>{username}</span>
        <span><b>✅ Votes: </b>{votes}</span>
        <span><b>⭐ Rating: </b>{rating}</span>
        <span><b>📺 Last Watched: </b>{watched}</span>
      </div>
    </li>
  );
};

export default CritiquesItem;