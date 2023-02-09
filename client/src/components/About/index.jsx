//External Imports
import React, { useState, useEffect } from "react";

//Components & Hooks
import Contact from "./Contact";
import Faq from "./Faq";

// Styling
import './styles.scss';

//Global Variables and modes
const CONTACT = "CONTACT", FAQ = "FAQ", EMPTY = "EMPTY";


const About = () => {

  const [ mode, setMode ] = useState( EMPTY );
  const transition = ( mode ) => setMode( mode );
  const emptyDiv = <div></div>;

  // Need to figure out how to keep mode on refresh (if we need this?)
  useEffect(() => {
    setMode( mode );
  }, [ mode ]);

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
        </div>
      </div>

      <div className="about-links">
        <div className="about-link">
          <button>TBD</button>
        </div>

        <div className="about-link">
          <button>TBD</button>
        </div>

        <div className="about-link">
          <button onClick={ () => transition( CONTACT ) }>CONTACT</button>
        </div>

        <div className="about-link">
          <button onClick={ () => transition( FAQ ) }>FAQ</button>
        </div>
      </div>

    </section>
  );
};


export default About;