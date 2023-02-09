//External Imports
import React from "react";

// Styling
import './Contact.scss';


// HTML below is for testing, we will alter this
const Contact = props => {
  
  return (
    <div className="contact">
      <p>CONTACT</p>
      <button onClick={ props.update }>
        <img src="images/close2.png"/>
      </button>
    </div>
  );
};


export default Contact;