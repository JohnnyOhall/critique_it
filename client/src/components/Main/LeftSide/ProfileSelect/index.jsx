// External imports
import React, { useContext } from "react";

// Components & hooks
import Main from "./Main"
import Register from "./Register";

// Providers
import { RegisterContext } from "../../../../providers/RegisterProvider";

// Styling
import './styles.scss';


const ProfileSelect = props => {

  const { register } = useContext( RegisterContext );

  return (
    <section className="profile-left" id="nav-profile">
      { !register && <Main /> }
      { register  && <Register /> }
    </section>
  );
};


export default ProfileSelect;