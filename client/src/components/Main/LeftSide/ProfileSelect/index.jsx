// External imports
import React, { useContext } from "react";

// Components & hooks
import { GlobalContext } from "../../../Application";
import ProfileSelectMain from "./ProfileSelectMain";
import ProfileSelectRegister from "./ProfileSelectRegister";

// Styling
import './styles.scss';


const ProfileSelect = props => {

  const { register } = useContext( GlobalContext );

  return (
    <section className="profile-left" id="nav-profile">
      { !register && <ProfileSelectMain /> }
      { register  && <ProfileSelectRegister /> }
    </section>
  );
};


export default ProfileSelect;