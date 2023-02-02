// External imports
import { useState } from "react";


// Used in Nav component to change state on hover
const useHover = () => {

  const [ critiqueHover, setCritiqueHover ] = useState( false );
  const [ statsHover, setStatsHover ] = useState( false );
  const [ exploreHover, setExploreHover ] = useState( false );
  const [ profileHover, setProfileHover ] = useState( false );
  const [ aboutHover, setAboutHover ] = useState( false );

  return { 
    critiqueHover, 
    setCritiqueHover, 
    statsHover, 
    setStatsHover, 
    exploreHover, 
    setExploreHover, 
    profileHover,
    setProfileHover,
    aboutHover,
    setAboutHover
  };
  
};


export default useHover;