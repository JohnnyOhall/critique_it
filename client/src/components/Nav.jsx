// External imports
import React from "react";

// Styling
import './Nav.scss';


const Nav = props => {
  const rateImg = "https://www.svgrepo.com/show/91435/star.svg",
  statsImg = "http://cdn.onlinewebfonts.com/svg/img_238648.png",
  exploreImg = "https://cdn-icons-png.flaticon.com/512/4406/4406266.png",
  profileImg = "http://cdn.onlinewebfonts.com/svg/img_453063.png",
  aboutImg = "https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png";

  return (
    <nav>
      <div className="link-nav"><img src={ rateImg }    /></div>
      <div className="link-nav"><img src={ statsImg }   /></div>
      <div className="link-nav"><img src={ exploreImg } /></div>
      <div className="link-nav"><img src={ profileImg } /></div>
      <div className="link-nav"><img src={ aboutImg }   /></div>
    </nav>
  );
};

export default Nav;