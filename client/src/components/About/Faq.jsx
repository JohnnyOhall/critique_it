//External Imports
import React, { useState } from "react";

// Styling
import './Faq.scss';

//Global Variables and modes
const START = "START", Q1 = "Q1", Q2 = "Q2", Q3 = "Q3", Q4 = "Q4";


const Faq = props => {

  const [mode, setMode] = useState(START);
  const transition = (mode) => setMode(mode);

  return (
    <div>

      {mode === START &&
        <div className="faq">
          <div className="faq-button">
            <button onClick={props.update}>✖︎</button>
          </div>

          <div className="faq-item">
            <button onClick={() => transition(Q1)}>
              <span>Can other critiquers search for my page?</span>
            </button>
          </div>

          <div className="faq-item">
            <button onClick={() => transition(Q2)}>
              <span>How many badges can I select?</span>
            </button>
          </div>

          <div className="faq-item">
            <button onClick={() => transition(Q3)}>
              <span>Do I need to have a profile to create a page?</span>
            </button>
          </div>

          <div className="faq-item">
            <button onClick={() => transition(Q4)}>
              <span>How many pages can I create?</span>
            </button>
          </div>

        </div>
      }


      {mode === Q1 &&
        <div className="faq-question">
          <div className="faq-button">
            <button onClick={() => transition(START)}>✖︎</button>
          </div>
          <div className="answer">
            <p>Absolutely! You can do the same to see what others think of your fav shows. </p>
          </div>
        </div>
      }

      {mode === Q2 &&
        <div className="faq-question">
          <div className="faq-button">
            <button onClick={() => transition(START)}>✖︎</button>
          </div>
          <div className="answer">
            <p>You can select up to 5 badges. Choose wisely!</p>
          </div>
        </div>
      }

      {mode === Q3 &&
        <div className="faq-question">
          <div className="faq-button">
            <button onClick={() => transition(START)}>✖︎</button>
          </div>
          <div className="answer">
            <p>Yes, you will need to create a profile. But don't worry, your information is safe with us.</p>
          </div>
        </div>
      }

      {mode === Q4 &&
        <div className="faq-question">
          <div className="faq-button">
            <button onClick={() => transition(START)}>✖︎</button>
          </div>
          <div className="answer">
            <p>As many as you like! The world is your oyster.</p>
          </div>
        </div>
      }

    </div>
  );
};


export default Faq;