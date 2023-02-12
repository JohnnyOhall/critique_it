// External Imports
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";


const Profile = props => {

  const { 
    DEFAULT, 
    setDisplay, 
    profileGlobal, 
    setProfileGlobal
  } = useContext(ExploreContext);

  const [ ProfileInfo, setProfileInfo ] = useState({})

  useEffect( () => {

  }, [])

  return (
    <div>
      Profile: {profileGlobal}
    </div>
  );
};


export default Profile;