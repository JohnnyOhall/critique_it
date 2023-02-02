//External imports
import React from "react";

// Styling
import './Footer.scss';


const Footer = props => (
  <footer>
    <div class="letters">
      <div class="c">c</div>
      <div class="r">r</div>
      <div class="i"><font color="#b22222">I</font></div>
      <div class="t"><font color="#b22222">T</font></div>
      <div class="i">i</div>
      <div class="q">q</div>
      <div class="u">u</div>
      <div class="e">e</div>
      <div class="pencil-icon">
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
