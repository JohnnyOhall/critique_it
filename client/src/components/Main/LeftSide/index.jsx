// External imports
import React, { useContext } from "react";

// Components & Hooks
import CritiqueSelect from "./CritiqueSelect";
import ExploreSelect from "./ExploreSelect";
import ProfileSelect from "./ProfileSelect";

//Providers
import { RegisterContext } from "../../../providers/RegisterProvider";
import { LoginContext } from "../../../providers/LoginProvider";


// Styling
import './LeftSide.scss';


const LeftSide = props => {
  const { loggedIn } = useContext( LoginContext );
  const { register } = useContext( RegisterContext );

  return (
    <section className="left-side">
      { loggedIn && <CritiqueSelect /> }
      <ExploreSelect />
      { loggedIn && <ProfileSelect /> }
      { register && <ProfileSelect /> }
    </section>
  );
};


export default LeftSide;



// Code for stats - add back eventually:
// import StatSelect from "./StatSelect";
// <StatSelect />