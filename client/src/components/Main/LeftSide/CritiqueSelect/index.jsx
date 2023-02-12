// External imports
import React, { useContext } from "react";

// Components & hooks
// import useCritiqueSelect from "../../../../hooks/visualModes/useCritiqueSelect";
import Main from "./Main";
import Add from "./Add";
import Boxes from "./Boxes";
import Badges from "./Badges";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styling
import './styles.scss';

// Global Variables - Modes
// const  = "MAIN", ADD = "ADD";


const CritiqueSelect = props => {

  // const { mode, transition, back } = useCritiqueSelect( MAIN );
  const { 
    DEFAULT, 
    setDisplay, 
    setCreate, 
    MAIN, 
    create,
    ADD, 
    BADGES, 
    BOXES } = useContext( CritiqueContext);

  return (
    <section className="critique-left" id="nav-critique">

      { create === MAIN && 
        <Main 
          onAdd={ () => {
            setCreate( ADD );
            setDisplay(DEFAULT);
          }}
        /> 
      }
      { create === ADD && 
        <Add 
          onClose={ () => setCreate( MAIN ) } 
          onSelect={ () => setCreate( MAIN ) } 
        /> 
      }
      { create === BADGES && <Badges /> }
      { create === BOXES &&  <Boxes /> }
    </section>
  );
};


export default CritiqueSelect;