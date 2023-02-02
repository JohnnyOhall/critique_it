// External imports
import React from "react";

// Components
import CritiqueSelect from "./CritiqueSelect";
import StatSelect from "./StatSelect";
import ExploreSelect from "./ExploreSelect";
import ProfileSelect from "./ProfileSelect";


const LeftSide = props => {


  return (
    <section className="left-side">
      <CritiqueSelect />
      <StatSelect />
      <ExploreSelect />
      <ProfileSelect />
    </section>
  );
};


export default LeftSide;