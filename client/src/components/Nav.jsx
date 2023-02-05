// External imports
import React, { useContext } from "react";

import { GlobalContext } from "./Application";

// Styling
import './Nav.scss';


const Nav = props => {
  const { loggedIn } = useContext( GlobalContext )

  const rateImg = "https://www.svgrepo.com/show/91435/star.svg",
  statsImg = "http://cdn.onlinewebfonts.com/svg/img_238648.png",
  exploreImg = "https://cdn-icons-png.flaticon.com/512/4406/4406266.png",
  profileImg = "http://cdn.onlinewebfonts.com/svg/img_453063.png",
  aboutImg = "https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png";

  return (
    <nav>
      {loggedIn && 
        <a href="#nav-critique">
          <div className="link-nav">
            <img src={ rateImg } />
            <span className="about-text">Critique</span>
          </div>
        </a>
      }

      <a href="#nav-stats">
        <div className="link-nav">
          <img src={ statsImg } />
          <span className="about-text">Stats</span>
        </div>
      </a>

      <a href="#nav-explore">
        <div className="link-nav">
          <img src={ exploreImg } />
          <span className="about-text">Explore</span>
        </div>
      </a>

      {loggedIn &&
        <a href="#nav-profile">
          <div className="link-nav">
            <img src={ profileImg } />
            <span className="about-text">Profile</span>
          </div>
        </a>
      }

      <a href="#nav-about">
        <div className="link-nav">
          <img src={ aboutImg } />
          <span className="about-text">About</span>
        </div>
      </a>

    </nav>
  );

};


export default Nav;