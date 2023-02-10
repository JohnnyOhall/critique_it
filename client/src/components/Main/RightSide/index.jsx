// External imports
import React, { useContext } from "react";

// Components & hooks
import CritiqueDisplay from "./CritiqueDisplay";
import ExploreDisplay from "./ExploreDisplay";
import ProfileDisplay from "./ProfileDisplay";

// Providers
import { LoginContext } from "../../../providers/LoginProvider";
import { RegisterContext } from "../../../providers/RegisterProvider";

// Styling
import './RightSide.scss';


const RightSide = props => {
  const { loggedIn } = useContext( LoginContext );
  const { register } = useContext( RegisterContext );

  return (
    <section className="right-side">
      { loggedIn && <CritiqueDisplay /> }
      <ExploreDisplay />
      { loggedIn && <ProfileDisplay /> }
      { register && <ProfileDisplay /> }
    </section>
  );
};


export default RightSide;



// Code for stats - add back eventually:
// import StatDisplay from "./StatDisplay";
// <StatDisplay />