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
  stars: "https://github.com/awran5/react-simple-star-rating",
  carousel: "https://github.com/vadymshymko/react-simply-carousel"
}


const Acknowledgements = props => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
    <div className="acknowledgements">

      <div className="ack-close-button">
        <button onClick={ props.update }>✖︎</button>
      </div>
    
      <div className="carousel">

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
            },
            children: <span className="arrow">{`>`}</span>,
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
            },
            children: <span className="arrow">{`<`}</span>,
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                marginRight: 7,
                marginLeft: 7,
              }
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "grey",
                marginRight: 7,
                marginLeft: 7
              }
            }
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

          <div className="carousel-item">
            <a href={ links.tvMaze }>TV Maze</a>
          </div>

          <div className="carousel-item">
            <a href={ links.stars }>Simple-star-rating</a>
          </div>

          <div className="carousel-item">
            <a href={ links.slider }>RC Slider</a>
          </div>

          <div className="carousel-item">
            <a href={ links.carousel }>Simply-carousel</a>
          </div>

          <div className="carousel-item">
            <a href={ links.lhl }>Lighthouse Labs</a>
          </div>
        </ReactSimplyCarousel>
      </div>

    </div>
  );
};


export default Acknowledgements;