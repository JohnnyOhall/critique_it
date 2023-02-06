// External imports
import React, { useContext } from "react";

// Components & hooks
import CritiqueDisplay from "./CritiqueDisplay";
import ExploreDisplay from "./ExploreDisplay";
import ProfileDisplay from "./ProfileDisplay";
import StatDisplay from "./StatDisplay";
import { GlobalContext } from "../../Application";

// Styling
import './RightSide.scss';


const RightSide = props => {
  const { loggedIn, register } = useContext( GlobalContext );

  return (
    <section className="right-side">
      { loggedIn && <CritiqueDisplay /> }
      <StatDisplay />
      <ExploreDisplay />
      { loggedIn && <ProfileDisplay /> }
      { register && <ProfileDisplay /> }
    </section>
  );
};


export default RightSide;