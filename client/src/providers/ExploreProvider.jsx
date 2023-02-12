import React, { useState, createContext } from "react";

export const ExploreContext = createContext();


const ExploreProvider = props => {

  const DEFAULT = "DEFAULT", PROFILE = "PROFILE", CRITIQUE = "CRITIQUE";

  const [ display, setDisplay ] = useState(DEFAULT);
  const [ profileGlobal, setProfileGlobal ] = useState('');
  const [ critiqueGlobal, setCritiqueGlobal ] = useState('');

  const value = { 
    DEFAULT, PROFILE, CRITIQUE,
    display, setDisplay,
    profileGlobal, setProfileGlobal,
    critiqueGlobal, setCritiqueGlobal
  };

  return (
    <ExploreContext.Provider value={ value }>
      { props.children }
    </ExploreContext.Provider>
  );
};


export default ExploreProvider;