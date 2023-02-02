// External imports
import React, { useState } from 'react';

// Styling
import './Nav.scss';


const Nav = props => {

  const [critiqueHover, setCritiqueHover] = useState(false);
  const [statsHover, setStatsHover] = useState(false);
  const [exploreHover, setExploreHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);

  const rateImg = "https://www.svgrepo.com/show/91435/star.svg",
    statsImg = "http://cdn.onlinewebfonts.com/svg/img_238648.png",
    exploreImg = "https://cdn-icons-png.flaticon.com/512/4406/4406266.png",
    profileImg = "http://cdn.onlinewebfonts.com/svg/img_453063.png",
    aboutImg = "https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png";

  return (
    <nav>

      <a
        href="#nav-critique"
        onMouseEnter={() => setCritiqueHover(true)}
        onMouseLeave={() => setCritiqueHover(false)}
      >
        {critiqueHover
          ? <div className="link-nav"><span className="about-text">Critique</span></div>
          : <div className="link-nav"><img src={rateImg} /></div>
        }
      </a>

      <a
        href="#nav-stats"
        onMouseEnter={() => setStatsHover(true)}
        onMouseLeave={() => setStatsHover(false)}
      >
        {statsHover
          ? <div className="link-nav"><span className="about-text">Stats</span></div>
          : <div className="link-nav"><img src={statsImg} /></div>
        }
      </a>

      <a
        href="#nav-explore"
        onMouseEnter={() => setExploreHover(true)}
        onMouseLeave={() => setExploreHover(false)}
      >
        {exploreHover
          ? <div className="link-nav"><span className="about-text">Explore</span></div>
          : <div className="link-nav"><img src={exploreImg} /></div>
        }
      </a>

      <a
        href="#nav-profile"
        onMouseEnter={() => setProfileHover(true)}
        onMouseLeave={() => setProfileHover(false)}
      >
        {profileHover
          ? <div className="link-nav"><span className="about-text">Profile</span></div>
          : <div className="link-nav"><img src={profileImg} /></div>
        }
      </a>

      <a
        href="#nav-about"
        onMouseEnter={() => setAboutHover(true)}
        onMouseLeave={() => setAboutHover(false)}
      >
        {aboutHover
          ? <div className="link-nav"><span className="about-text">About</span></div>
          : <div className="link-nav"><img src={aboutImg} /></div>
        }
      </a>

    </nav>
  );
};

export default Nav;