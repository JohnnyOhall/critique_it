// External imports
import { useState } from "react";


// Used in Nav component to change state on hover
const useHover = () => {

  const [ state, setState ] = useState({
    critiqueHover: false,
    statsHover: false,
    exploreHover: false,
    profileHover: false,
    aboutHover: false
  });

  return { state, setState };
  
};


export default useHover;