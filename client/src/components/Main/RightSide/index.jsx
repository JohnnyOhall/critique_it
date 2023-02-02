// External imports
import React from "react";

// Components
import CritiqueDisplay from "./CritiqueDisplay";
import ExploreDisplay from "./ExploreDisplay";
import ProfileDisplay from "./ProfileDisplay";
import StatDisplay from "./StatDisplay";

// Styling
import './RightSide.scss';


const RightSide = props => {


  return (
    <section className="right-side">
      <CritiqueDisplay />
      <StatDisplay />
      <ExploreDisplay />
      <ProfileDisplay />
    </section>
  );
};


export default RightSide;