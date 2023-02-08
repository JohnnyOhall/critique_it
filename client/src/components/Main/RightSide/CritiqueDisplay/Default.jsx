// External Imports
import React, { useContext } from "react";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styling
import './Default.scss';


const Default = props => {
  
  const { setDisplay, INSTRUCTIONS } = useContext( CritiqueContext );

  return (
    <section className="default-index">
      <div className="default-title">
        <div className="pre-wave">WAITING FOR PAGE</div>
        <div className="wave">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="default-gif">
        <img src="/images/loading.gif"/>
      </div>

      <div className="default-button">
        <button onClick={ () => setDisplay( INSTRUCTIONS ) }>Instructions</button>
      </div>
    </section>
  );
};


export default Default;