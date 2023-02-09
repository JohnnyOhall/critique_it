//External Imports
import React from "react";

// Styling
import './Team.scss';


// HTML below is for testing, we will alter this
const Team = props => {
  
  return (
    <div className="team">
      <p>Team</p>
      <button onClick={ props.update }>
        <img src="images/close2.png"/>
      </button>
    </div>
  );
};


export default Team;