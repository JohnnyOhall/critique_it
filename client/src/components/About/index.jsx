//External Imports
import React, { useState, useEffect } from "react";

//Components & Hooks
import Contact from "./Contact";
import Faq from "./Faq";
import Acknowledgements from "./Acknowledgements";
import Team from "./Team";

// Styling
import './styles.scss';

//Global Variables and modes
const CONTACT = "CONTACT", 
      FAQ = "FAQ",
      EMPTY = "EMPTY",
      ACKNOWLEDGEMENTS = "ACKNOWLEDGEMENTS",
      TEAM = "TEAM";


const About = () => {

  const [ mode, setMode ] = useState( EMPTY );
  const transition = ( mode ) => setMode( mode );
  const emptyDiv = <div className="empty-div"></div>;

  return (
    <section className="about-us" id="nav-about">

      <div className="about-content">
        <div className="about-heading">
          <p>ABOUT</p>
          <p>US</p>
        </div>

        <div className="about-box">
          { mode === EMPTY && emptyDiv }
          { mode === CONTACT && 
            <Contact update={ () => transition( EMPTY ) }/>
          }
          { mode === FAQ && 
            <Faq update={ () => transition( EMPTY ) } />
          }
          { mode === ACKNOWLEDGEMENTS && 
            <Acknowledgements update={ () => transition( EMPTY ) } />
          }
          { mode === TEAM && 
            <Team update={ () => transition( EMPTY ) } />
          }
        </div>
      </div>

      <div className="about-links">
      <div className="about-link">
          <button onClick={ () => transition( CONTACT ) }>Contact</button>
        </div>

        <div className="about-link">
          <button onClick={ () => transition( FAQ ) }>FAQ</button>
        </div>

        <div className="about-link">
          <button onClick={ () => transition( ACKNOWLEDGEMENTS ) }>Acknowledgements</button>
        </div>

        <div className="about-link">
          <button onClick={ () => transition( TEAM ) }>Our team</button>
        </div>

      </div>

    </section>
  );
};


export default About;