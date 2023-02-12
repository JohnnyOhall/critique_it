// External Imports
import React, { useContext } from "react";

// Components
import Default from './Default'
import Profile from './Profile'
import Critique from './Critique'

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";

// Styling
import './styles.scss';


const ExploreDisplay = prop => {

  const { 
    DEFAULT, PROFILE, CRITIQUE,
    display, setDisplay,
  } = useContext(ExploreContext);

  return (
    <section className="explore-right">
      <div className="explore-display">
        { display === DEFAULT && <Default /> }
        { display === PROFILE && <Profile /> }
        { display === CRITIQUE && <Critique /> }
      </div>
    </section>
  );
};


export default ExploreDisplay;