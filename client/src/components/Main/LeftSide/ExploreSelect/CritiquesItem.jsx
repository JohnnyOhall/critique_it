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
      <span>Critiquer: {username}</span>
      <span>Votes: {votes}</span>
      <span>Rating: {rating}</span>
      <span>Last Watched: {watched}</span>
    </li>
  );
};

export default CritiquesItem;