import React, { useContext } from "react";
import { ExploreContext } from "../../../../providers/ExploreProvider";

const EpisodeItem = props => {

  const { page_id, rating, votes, watched, show_title } = props;

  const { 
    setDisplay, 
    CRITIQUE, 
    setCritiqueGlobal 
  } = useContext(ExploreContext)

  const setGlobal = () => {
    setCritiqueGlobal(page_id)
    setDisplay(CRITIQUE)
  };

  return (
    <li onClick={setGlobal}>
      <span>{show_title}</span>
      <span>Votes: {votes}</span>
      <span>Rating: {rating}</span>
      <span>Last Watched: {watched}</span>
    </li>
  );
};

export default EpisodeItem;