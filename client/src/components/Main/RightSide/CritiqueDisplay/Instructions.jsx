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
        forwardBtnProps={{ show: false }}
        backwardBtnProps={{ show: false }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 20,
              width: 20,
              borderRadius: "50%",
              border: 0,
              marginRight: 10,
              marginLeft: 10,
              marginTop: 35,
              cursor: "pointer",
            }
          },
          activeItemBtnProps: {
            style: {
              height: 20,
              width: 20,
              borderRadius: "50%",
              border: 0,
              background: "#333333",
              marginRight: 10,
              marginLeft: 10,
              marginTop: 35,
              cursor: "pointer",
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
          <p><h2 className="heading">Search for a show</h2></p>
          <ol>
            <li>Click on the plus button to the left.</li>
            <li>Enter a show name and click the magnifying glass.</li>
            <li>The show results will be displayed. Here you'll see important details such as summary, rating, and more.</li>
            <li>If you want to add the show to your list, click on the plus button.</li>
            <li>Once you've clicked on the plus button, you will be directed back to your list.</li>
          </ol>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Create a page</h2></p>
          <ol>
            <li>Locate your recently added show on the list to the left.</li>
            <li>Click on the show image to populate the season and episode info.</li>
            <li>Use the yellow sliders to find the season and episode.</li>
            <li>Click on the plus button and your page will open to the right.</li>
            <li>Fill out the required information and click save. But before you do, continue to the next slide to learn about customization.</li>
          </ol>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Customization</h2></p>
          <ul>
            <li>Update your page color by clicking on the three horizontal lines in the top left corner.</li>
            <li>The first plus button will open a badges selection to the left. Select a badge and you'll be able to add your favourite actors and upload an image of your choosing. Click add once your badge is created.</li>
            <li>The second plus button will open a boxes selection. Select from the various options and enter the text and/or images you'd like. Clicking add will add the box to your page.</li>
          </ul>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Edit a page</h2></p>
          <ol>
            <li>Locate your recently critiqued show on the list to the left.</li>
            <li>Click on the show image to populate the season and episode info.</li>
            <li>Use the yellow sliders to find the season and episode.</li>
            <li>Click on the plus button and your page will open to the right.</li>
            <li>Update the fields you wish to change and click the save button.</li>
          </ol>
        </div>

        <div className="instruction-item">
          <p><h2 className="heading">Good to know</h2></p>
          <ul>
            <li>Want to see a description of the show without having to search for it again? Simply click on the show name and it will open on the right!</li>
            <li>If you have a ton of shows added, just scroll down to go through your list.</li>
            <li>When you see a green checkmark button, it means you created a show for this page. If you see a navy plus button, it means you haven't.</li>
          </ul>
        </div>

      </ReactSimplyCarousel>
    </div>
  );
};


export default Instructions;