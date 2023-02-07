// External imports
import React from "react";

// Components and hooks
import Default from "./Default";
import Summary from "./Summary";
import Instructions from "./Instructions";
import View from "./View";
import Edit from "./Edit";

// Styling
import './styles.scss';


const CritiqueDisplay = props => {

  return (
    <section className="critique-right">
      <div className="critique-display">
        <Default />
        <Summary />
        <Instructions />
        <View />
        <Edit />
      </div>
    </section>
  );
};


export default CritiqueDisplay;