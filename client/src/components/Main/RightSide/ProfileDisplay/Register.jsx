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
            <li>
              Add step
            </li>
            <li>
              Add step
            </li>
            <li>
              Add step
            </li>
            <li>
              Add step
            </li>
          </ol>
        </div>

        <div className="terms">
          <h2>Terms and Conditions:</h2>
          <ul>
            <li>
              You are not permitted to impersonate others or provide inaccurate information.
            </li>
            <li>
              We reserve the right to change your username or disable a page that contains inappropriate or derogatory language.
            </li>
            <li>
              You cannot sell or purchase any account or data obtained from us.
            </li>
            <li>
              You provide us permission to show your username, avatar and actions such as reviews and likes publically.
            </li>
            <li>
              More conditions...
            </li>
            <li>
              More conditions...
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};


export default Register;