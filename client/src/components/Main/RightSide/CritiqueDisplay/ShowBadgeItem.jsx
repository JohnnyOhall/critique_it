import React, { useState } from "react";

import { badgeImages } from "../../../../constants/constants";

const ShowBadgeItem = props => {

  const { actor_1, actor_2, url_actor_1, url_actor_2, badge_id } = props;

  // const [ dualDisplay, setDualDisplay ] = useState(false);

  // (badge_id === 3 || badge_id === 9) && setDualDisplay(true);

  const badgeImage = badgeImages[ badge_id ];

  return (
    <li className="show-badge-item">
    { !actor_2 && 
      <div className="single-box"> 
        <img src={badgeImage} height="100px" widght="100px"/>
        <div className="character">
          <img src={url_actor_1} width="25px" height="25px" />
          <span>{actor_1}</span>
        </div>
      </div> 
    }

    { actor_2 && 
      <div className="single-box-dual"> 
        <img src={badgeImage} height="75px" widght="75px"/>
        <div className="character">
          <img src={url_actor_1} width="25px" height="25px" />
          <span>{actor_1}</span>
        </div>
        <div className="character">
          <img src={url_actor_2} width="25px" height="25px" />
          <span>{actor_2}</span>
        </div>
      </div> 
    }
    </li>
  );
};

export default ShowBadgeItem;