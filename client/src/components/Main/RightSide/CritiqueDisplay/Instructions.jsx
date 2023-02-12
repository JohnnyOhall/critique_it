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
        <button className="close-button" onClick={ () => setDisplay( DEFAULT ) }>✖︎</button>
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
            marginLeft: 50,
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
            marginRight: 60,
          },
          children: <span className="instructions-arrow">{`<`}</span>,
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 18,
              width: 18,
              borderRadius: "50%",
              border: 0,
              marginRight: 10,
              marginLeft: 10,
            }
          },
          activeItemBtnProps: {
            style: {
              height: 18,
              width: 18,
              borderRadius: "50%",
              border: 0,
              background: "#333333",
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
          <p><h2 className="heading">Search for a show:</h2></p>
          <ul>
            <li>Click on the plus button to the left</li>
            <li>Enter a show name and click the magnifying glass</li>
            <li>The show results will be displayed</li>
            <li>If you want to add the show, click on the plus button</li>
          </ul>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Create a page:</h2></p>
          <ul>
            <li>Find your added show in the list to the left</li>
            <li>Click on the show image to populate the season and episode info</li>
            <li>Use the yellow slider to find the show you'd like to create a page for</li>
            <li>Click on the plus button and your page will open to the right</li>
            <li>Customize available fields and click the save button. Continue to the next slide to learn about customizing your page.</li>
          </ul>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Customize your page:</h2></p>
          <ul>
            <li>Click on the three horizontal lines to update your page color.</li>
            <li>Click on the first plus button to open a badges selection to the left. Select a badge and you'll be able to add your favourite actors and upload an image of your choosing. Clicking add will add the badge to your page.</li>
          </ul>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Customize your page (cont):</h2></p>
          <ul>
            <li>Click on the second plus button to open a boxes selection where you can dive deeper into customizing your page. Select from the various options and enter the text and/or images you'd like. Clicking add will add the box to your page.</li>
            <li>Don't forget to press save when you're done your page!</li>
          </ul>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Not sure what to do with this section</h2></p>
          <ul>
            <li>??????????????????</li>
            <li>Looks weird??</li>
            <li>Transparent does too</li>
            <li>Help!</li>
            <li>🥹</li>
          </ul>
        </div>
      </ReactSimplyCarousel>

    </div>
  );
};


export default Instructions;