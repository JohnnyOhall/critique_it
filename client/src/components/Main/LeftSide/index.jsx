// External imports
import React, { useContext } from "react";

// Components
import CritiqueSelect from "./CritiqueSelect";
import StatSelect from "./StatSelect";
import ExploreSelect from "./ExploreSelect";
import ProfileSelect from "./ProfileSelect";

import { GlobalContext } from "../../Application";


// Styling
import './LeftSide.scss';


const LeftSide = props => {
  const { loggedIn } = useContext( GlobalContext )

  return (
    <section className="left-side">
      {loggedIn && <CritiqueSelect />}
      <StatSelect />
      <ExploreSelect />
      {loggedIn && <ProfileSelect /> }
    </section>
  );
};


export default LeftSide;