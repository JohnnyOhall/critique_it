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
        <span><b>Episode Title: </b>
          <span style={{ color: "black" }}>{ show_title }</span>
        </span>
        <div>
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
      </div>
    </li>
  );
};

export default EpisodeItem;