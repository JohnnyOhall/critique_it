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
      <div className="episode-item-by-user">
        <span><b>Episode Title:</b> {show_title}</span>
        <div>
          <span><b>✅ Votes:</b> {votes}</span>
          <span><b>⭐ Rating:</b> {rating}</span>
          <span><b>📺 Last Watched:</b> {watched}</span>
        </div>
      </div>
    </li>
  );
};

export default EpisodeItem;