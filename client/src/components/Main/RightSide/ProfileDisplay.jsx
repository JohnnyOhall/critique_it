//External Imports
import React, { useContext } from "react";

// Components & hooks
import { GlobalContext } from "../../Application";


// Styling
import './ProfileDisplay.scss';


const ProfileDisplay = prop => {

  const { register } = useContext( GlobalContext );

  return (
    <section className="profile-right">
      { !register && <div className="profile-display"> 
      
      </div>}
      { register && <div className="profile-display">register page</div> }
    </section>
  );
};


export default ProfileDisplay;