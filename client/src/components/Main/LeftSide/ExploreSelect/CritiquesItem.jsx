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
        <span><b> ✏️ Critiquer: </b>
          <span style={{ color: "black" }}>{ username }</span>
        </span>
        <span><b>✅ Votes: </b>
          <span style={{ color: "black" }}>{ votes }</span>
        </span>
        <span><b>⭐ Rating: </b>
          <span style={{ color: "black" }}>{ rating }</span>
        </span>
        <span><b>📺 Last Watched: </b>
          <span style={{ color: "black" }}>{ watched }</span>
        </span>
      </div>
    </li>
  );
};

export default CritiquesItem;