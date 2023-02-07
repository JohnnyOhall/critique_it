// External imports
import React, { useContext } from "react";

// Components and hooks
import Default from "./Default";
import Summary from "./Summary";
import Instructions from "./Instructions";
import View from "./View";
import Edit from "./Edit";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styling
import './styles.scss';


const CritiqueDisplay = props => {

  const { 
    display, 
    setDisplay, 
    SUMMARY, 
    DEFAULT, 
    INSTRUCTIONS, 
    EDIT, 
    VIEW 
  } = useContext( CritiqueContext )

  return (
    <section className="critique-right">
      <div className="critique-display">
        { display === DEFAULT && <Default /> }
        { display === SUMMARY && <Summary /> }
        { display === INSTRUCTIONS && <Instructions /> }
        { display === VIEW && <View /> }
        { display === EDIT && <Edit /> }
      </div>
    </section>
  );
};


export default CritiqueDisplay;