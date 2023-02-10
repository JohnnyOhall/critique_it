import React, { useState, createContext } from "react";

export const CritiqueContext = createContext();


const CritiqueProvider = props => {
  const SUMMARY = "SUMMARY", DEFAULT = "DEFAULT", 
  INSTRUCTIONS = "INSTRUCTIONS", EDIT = "EDIT", 
  VIEW = "VIEW";

  const BOXES = "BOXES", BADGES = "BADGES", 
  MAIN ="MAIN", ADD = "ADD";

  const [ create, setCreate ] = useState( MAIN );
  const [ display, setDisplay ] = useState( DEFAULT );
  const [ episodeInfoGlobal, setEpisodeInfoGlobal ] = useState( {} );
  const [ boxes, setBoxes ] = useState([]);
  

  const value = { 
    display, 
    setDisplay,
    episodeInfoGlobal,
    setEpisodeInfoGlobal,
    SUMMARY, 
    DEFAULT, 
    INSTRUCTIONS, 
    EDIT, 
    VIEW,
    create, setCreate,
    BADGES, BOXES,
    MAIN, ADD,
    setBoxes, boxes
  };

  return (
    <CritiqueContext.Provider value={ value }>
      { props.children }
    </CritiqueContext.Provider>
  );
};


export default CritiqueProvider;