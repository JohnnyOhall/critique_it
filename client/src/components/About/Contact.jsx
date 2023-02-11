//External Imports
import React from "react";

// Styling
import './Contact.scss';


const Contact = props => {
  
  return (
    <div className="contact">

      <div className="contact-top">
        <div className="contact-icons">
          <img className="facebook" src="https://www.shareicon.net/data/256x256/2015/08/29/92757_like_606x606.png"></img>
          <img className="instagram" src="https://www.shareicon.net/data/256x256/2016/07/10/119591_instagram_512x512.png"></img>
          <img className="twitter" src="https://freeiconshop.com/wp-content/uploads/edd/twitter-flat.png"></img>
        </div>
        
        <div className="contact-button">
          <button onClick={ props.update }>✖︎</button>
        </div>
      </div>

      <div className="contact-text">
        <p>Contact us</p>
      </div>

      <div className="contact-email">
        <p>info@critique.com</p>
      </div>

    </div>
  );
};


export default Contact;