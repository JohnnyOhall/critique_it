// External Imports
import React, { useContext, useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styling
import './Instructions.scss';


const Instructions = () => {

  const { setDisplay, DEFAULT } = useContext( CritiqueContext );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="instructions">

      <div className="close-button-container">
        <button className="close-button" onClick={ () => setDisplay( DEFAULT ) }><h3>✖︎</h3></button>
      </div>

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginRight: 10,
          },
          children: <span className="instructions-arrow">{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginRight: 10,
          },
          children: <span className="instructions-arrow">{`<`}</span>,
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              marginRight: 10,
              marginLeft: 10,
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "#0F0F0F",
              marginRight: 10,
              marginLeft: 10,
            }
          }
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={400}
        easing="linear"
      >

        <div className="instruction-item">
          <p>This is a test of what it could look like, just need to figure out how we want it styled.<p></p>Click <a href="https://github.com/vadymshymko/react-simply-carousel">here</a> to view the customization options.</p>
        </div>

        <div className="instruction-item">
          <p>Do we hate it? I'm open to other ideas!</p>
        </div>

        <div className="instruction-item">
          <p>Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text. Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text. Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.Here's a bunch of text.</p>
        </div>

        <div className="instruction-item">
          <p>Code is a bit messy right now but it can be cleaned up 😌</p>
        </div>
      </ReactSimplyCarousel>

    </div>
  );
};


export default Instructions;