//External imports
import React from "react";

// Styling
import './Footer.scss';


const Footer = props => (
  <footer>
    <div className="letters">
      <div className="c">c</div>
      <div className="r">r</div>
      <div className="i"><font color="#b22222">I</font></div>
      <div className="t"><font color="#b22222">T</font></div>
      <div className="i">i</div>
      <div className="q">q</div>
      <div className="u">u</div>
      <div className="e">e</div>
      <div className="pencil-icon">
        <font className="pencil" color="#b22222">🖉</font>
      </div>
    </div>
  </footer>
);


export default Footer;


// Code from prior to the bouncing hover effect. To go back to original code, remove everything in footer above and replace with this:
// const Footer = props => (
//   <footer>
//     <h1>cr<font color="#b22222">IT</font>ique<font className="pencil" color="#b22222">🖉</font></h1>
//   </footer>
// );
