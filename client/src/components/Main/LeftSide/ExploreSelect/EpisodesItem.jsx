import React, { useState } from "react";
import axios from "axios";

import CritiquesItem from "./CritiquesItem";


const EpisodesItem = props => {

  const { id, number, name } = props
  const [ critiques, setCritiques ] = useState([])
  const [ displayResults, setDisplayResults ] = useState( false )

  const searchCritique = () => {
    if (!displayResults) {
      axios.get(`pages/search/critiques/${ id }`)
      .then( res => {
        setCritiques(res.data.data.rows)
        setDisplayResults(true)
      }) 
      .catch( console.log )
    }

    if (displayResults) {
      setCritiques([])
      setDisplayResults(false)
    }
  }

  const critiquesItem = critiques.map( it => {
    return (
      <CritiquesItem
        key={ it.id }
        page_id={ it.id }
        rating={ it.rating }
        votes={ it.votes }
        watched={ it.watched_on }
        creator={ it.creator_id }
      />
    ); 
  });

  return (
    <li>
      <span onClick={searchCritique} >{number}: {name}</span>
      { critiques.length !== 0 && <ul className="critiques-list-show">{ critiquesItem }</ul> }
    </li>
  );
};


export default EpisodesItem;