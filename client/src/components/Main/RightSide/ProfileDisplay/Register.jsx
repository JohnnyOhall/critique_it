//External Imports
import React from "react";

// Styling
import './Register.scss';


const Register = () => {

  return (
    <div className="profile-display">
      <div className="register-instructions">

        <div className="how-to">
          <h2>How to register:</h2>
          <ol>
            <li>Fill out the fields for username, email & password.</li>
            <li>Tell other critiquers a bit about yourself by entering a short bio. If you'd rather keep it blank, no worries!</li>
            <li>Select an avatar of your choosing.</li>
            <li>Once all the required information is filled out, click register.</li>
            <li>Go to the top of the site and login with your email and password.</li>
          </ol>
        </div>

        <div className="register-image">
          <img src="https://cdn.discordapp.com/attachments/1036346006964535398/1074825461206634507/pusheen-with-laptop-cursor-pack.png"/>
        </div>

        <div className="terms">
          <h2>Terms and Conditions:</h2>
          <ul>
            <li>You are not permitted to impersonate others or provide inaccurate information.</li>
            <li>We reserve the right to change your username or disable a page that contains inappropriate or derogatory language.</li>
            <li>You cannot sell or purchase any account or data obtained from us.</li>
            <li>You provide us permission to show your username, avatar and actions such as reviews and likes publically.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};


export default Register;