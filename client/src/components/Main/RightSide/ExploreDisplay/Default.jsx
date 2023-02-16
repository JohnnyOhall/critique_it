// External exports
import React from "react";

// Styles
import "./Default.scss";


const Default = props => {

  return (
    <div className="explore-display">
      <div className="explore-display-img">
        <img src="https://cdn.custom-cursor.com/packs/1206/pack1432.png" />
      </div>
      <div className="default-title">
        <div className="wave">
          WAITING FOR SEARCH
          <span> </span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};


export default Default;