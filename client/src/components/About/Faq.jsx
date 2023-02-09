//External Imports
import React from "react";

// Styling
import './Faq.scss';


// HTML below is for testing, we will alter this
const Faq = props => {
  
  return (
    <div className="faq">
      <p>FAQ</p>
      <button onClick={ props.update }>
        <img src="images/close2.png"/>
      </button>
    </div>
  );
};


export default Faq;