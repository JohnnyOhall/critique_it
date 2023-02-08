// External imports
import React, { useContext } from "react";


// Providers
import { LoginContext } from "../providers/LoginProvider";

// Styling
import './Nav.scss';


const Nav = props => {

  const { loggedIn } = useContext( LoginContext );

  //Navbar button images
  const rateImg = "https://www.svgrepo.com/show/91435/star.svg";
  const statsImg = "http://cdn.onlinewebfonts.com/svg/img_238648.png";
  const exploreImg = "https://cdn-icons-png.flaticon.com/512/4406/4406266.png";
  const profileImg = "http://cdn.onlinewebfonts.com/svg/img_453063.png";
  const aboutImg = "https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png";

  return (
    <nav>
      { loggedIn && 
        <a href="#nav-critique" className="link-nav-critique">
          <img src={ rateImg } />
        </a>
      }

      <a href="#nav-stats" className="link-nav-stats">
        <img src={ statsImg } />
      </a>

      <a href="#nav-explore" className="link-nav-explore">
        <img src={ exploreImg } />
      </a>

      { loggedIn &&
        <a href="#nav-profile" className="link-nav-profile">
          <img src={ profileImg } />
        </a>
      }

      <a href="#nav-about" className="link-nav-about">
        <img src={ aboutImg } />
      </a>

    </nav>
  );
};


export default Nav;