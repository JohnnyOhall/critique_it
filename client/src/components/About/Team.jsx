//External Imports
import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

// Styling
import './Team.scss';


const Team = props => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
    <div className="team">

      <div className="team-close-button">
        <button onClick={ props.update }>✖︎</button>
      </div>
    
      <div className="team-carousel">

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

          <div className="team-carousel-item">
            <div className="meet-team">
              <p>Meet the team</p>
            </div>
          </div>

          <div className="team-carousel-item">
            <div className="name">
              <p className="first-name">John</p>
              <p>co-founder</p>
            </div>
            <img src="images/john.png"></img>
          </div>

          <div className="team-carousel-item">
            <div className="name">
              <p className="first-name">Jacqui</p>
              <p>co-founder</p>
            </div>
            <img src="images/jacqui.png"></img>
          </div> 

        </ReactSimplyCarousel>
      </div>

    </div>
  );
};


export default Team;