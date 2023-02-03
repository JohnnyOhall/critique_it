// External imports
import React from "react";
import useCritiqueSelectVisualMode from "../../../hooks/useCritiqueSelectVisualMode";
import CritiqueSelectMain from "./CritiqueSelectMain";
import CritiqueSelectAdd from "./CritiqueSelectAdd";

// Styling
import './CritiqueSelect.scss';


const MAIN = "MAIN", ADD = "ADD"


const CritiqueSelect = props => {

  const { mode, transition, back } = useCritiqueSelectVisualMode( MAIN )

  return (
    <section className="critique-left" id="nav-critique">
      { mode === MAIN && <CritiqueSelectMain onAdd={() => transition( ADD )} /> }
      { mode === ADD && <CritiqueSelectAdd />}
    </section>
  );
};


export default CritiqueSelect;