// External imports
import React, { useContext } from "react";

// Components & hooks
import { GlobalContext } from "../../../Application";
import ProfileSelectMain from "./ProfileSelectMain";
import ProfileSelectRegister from "./ProfileSelectRegister";

// Providers
import { RegisterContext } from "../../../../providers/RegisterProvider";

// Styling
import './styles.scss';


const ProfileSelect = props => {

  const { register } = useContext( RegisterContext );

  return (
    <section className="profile-left" id="nav-profile">
      { !register && <ProfileSelectMain /> }
      { register  && <ProfileSelectRegister /> }
    </section>
  );
};


export default ProfileSelect;