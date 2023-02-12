import React from "react";

const ShareProfile = props => {

  return (
    <div className="share-box"> 
      <div className="share-title">
        <span>Share your profile on</span>
      </div>
      <div className="share-links">
        <img 
          src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
          height="100px" weight="100px"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          height="100px" weight="100px"
        />
        <img 
          src="https://i.pinimg.com/originals/9e/d9/7c/9ed97c85ef3f30fa564ecafa3239ae4d.png"
          height="100px" weight="100px"
        />
        <img 
          src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png"
          height="100px" weight="100px"
        />
      </div>
    </div>
  );
};

export default ShareProfile;