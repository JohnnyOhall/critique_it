//External Imports
import React, { useContext } from "react";

// Providers
import { RegisterContext } from "../../../../providers/RegisterProvider";


//Components & Hooks
import Register from "./Register";
import Main from "./Main";

// Styling
import './styles.scss';


const ProfileDisplay = prop => {

  const { register } = useContext( RegisterContext );

  return (
    <section className="profile-right">
      { !register && <Main /> }
      { register && <Register /> }
    </section>
  );
};


export default ProfileDisplay;