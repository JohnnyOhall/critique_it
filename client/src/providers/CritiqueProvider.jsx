import React, { useState, createContext } from "react";

export const CritiqueContext = createContext();


const CritiqueProvider = props => {
  const SUMMARY = "SUMMARY", DEFAULT = "DEFAULT", 
  INSTRUCTIONS = "INSTRUCTIONS", EDIT = "EDIT", 
  VIEW = "VIEW";

  const [ display, setDisplay ] = useState( DEFAULT );
  const [ episodeInfo, setEpisodeInfo ] = useState( {} );

  const value = { 
    display, 
    setDisplay,
    episodeInfo,
    setEpisodeInfo,
    SUMMARY, 
    DEFAULT, 
    INSTRUCTIONS, 
    EDIT, 
    VIEW 
  };

  return (
    <CritiqueContext.Provider value={ value }>
      { props.children }
    </CritiqueContext.Provider>
  );
};


export default CritiqueProvider;