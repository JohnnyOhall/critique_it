//External Imports
import React, { useContext } from "react";

// Providers
import { RegisterContext } from "../../../../providers/RegisterProvider";

//Components & Hooks
import ProfileDisplayRegister from "./ProfileDisplayRegister";

// Styling
import './styles.scss';


const ProfileDisplay = prop => {

  const { register } = useContext( RegisterContext );

  return (
    <section className="profile-right">
      { !register && <div className="profile-display"> 
      
      </div>}
      { register && 
        <div className="profile-display">
          <ProfileDisplayRegister />
        </div> 
      }
    </section>
  );
};


export default ProfileDisplay;