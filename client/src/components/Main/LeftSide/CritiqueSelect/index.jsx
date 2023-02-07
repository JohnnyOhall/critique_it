// External imports
import React from "react";

// Components & hooks
import useCritiqueSelect from "../../../../hooks/visualModes/useCritiqueSelect";
import CritiqueSelectMain from "./CritiqueSelectMain";
import CritiqueSelectAdd from "./CritiqueSelectAdd";

// Styling
import './styles.scss';

// Global Variables - Modes
const MAIN = "MAIN", ADD = "ADD";


const CritiqueSelect = props => {

  const { mode, transition, back } = useCritiqueSelect( MAIN );

  return (
    <section className="critique-left" id="nav-critique">
      { mode === MAIN && <CritiqueSelectMain onAdd={ () => transition( ADD ) } /> }
      { mode === ADD && 
        <CritiqueSelectAdd 
          onClose={ () => transition( back ) } 
          onSelect={ () => transition( MAIN ) } 
        /> 
      }
    </section>
  );
};


export default CritiqueSelect;