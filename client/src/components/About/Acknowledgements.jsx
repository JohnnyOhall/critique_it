//External Imports
import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

// Styling
import './Acknowledgements.scss';

//Global Variables and modes
const links = {
  lhl: "https://www.lighthouselabs.ca/",
  tvMaze: "https://www.tvmaze.com/",
  slider: "https://www.npmjs.com/package/rc-slider",
  stars: "https://github.com/awran5/react-simple-star-rating"
}


// HTML below is for testing, we will alter this
const Acknowledgements = props => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
    <div className="acknowledgements">

      <div className="ack-close-button">
        <button onClick={ props.update }>✖️</button>
      </div>
      
      <p>The making of crITique would not be possible without:</p>

      <div className="carousel">

        <ReactSimplyCarousel

          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              color: 'black',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              color: 'black',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 500,
            },
          ]}
          speed={400}
          easing="linear"
          >

          <div style={{ 
              width: 300, 
              height: 150, 
              background: 'whitesmoke',
              borderRadius: '20%'
            }}>
            <a href={ links.tvMaze }>TV Maze</a>
          </div>

          <div style={{ 
            width: 300, 
            height: 150, 
            background: 'whitesmoke',
            borderRadius: '20%' 
            }}>
            <a href={ links.stars }>React-simple-star-rating</a>
          </div>

          <div style={{ 
            width: 300, 
            height: 150, 
            background: 'whitesmoke',
            borderRadius: '20%' 
            }}>
            <a href={ links.slider }>RC Slider</a>
          </div>

          <div style={{ 
            width: 300, 
            height: 150, 
            background: 'whitesmoke',
            borderRadius: '20%'  
            }}>
            <a href={ links.lhl }>Lighthouse Labs Web Development Bootcamp</a>
          </div>

        </ReactSimplyCarousel>
      </div>

    </div>
  );
};


export default Acknowledgements;