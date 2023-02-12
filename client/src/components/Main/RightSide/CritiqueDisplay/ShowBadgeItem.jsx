import React, { useContext } from "react";
import axios from "axios";

import { badgeImages } from "../../../../constants/constants";
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

import "./ShowBadgeItem.scss";

const ShowBadgeItem = props => {

  const { actor_1, actor_2, url_actor_1, url_actor_2, badge_id, id } = props;

  const badgeImage = badgeImages[ badge_id ];

  const { EDIT, display, setBadges, episodeInfoGlobal } = useContext( CritiqueContext );

  const deleteBadge = () => {
    axios.delete(`badges/${ id }`)
      .then( () => {
        return axios.get(`badges/${ episodeInfoGlobal.page_id }`)
      })
      .then(res => {
        const extractBadge = res.data.data.rows;
        setBadges( extractBadge );
      })
      .catch( console.log );
  };

  return (
    <li className="show-badge-item">
    { !actor_2 && 
      <div className="single-box"> 
        <div className="content-container">
          <img src={badgeImage} height="100px" widght="100px"/>
          <div className="character">
            <img src={url_actor_1} width="25px" height="25px" />
            <span>{actor_1}</span>
          </div>
        </div>
        <div className="badge-delete-container">
          { display === EDIT &&
            <img onClick={ deleteBadge } src="images/trash.png" />
          }
        </div>
      </div> 
    }

    { actor_2 && 
      <div className="single-box-dual"> 
        <div className="content-container">
          <img src={badgeImage} height="75px" widght="75px"/>
          <div className="character-1">
            <img src={url_actor_1} width="25px" height="25px" />
            <span>{actor_1}</span>
          </div>
          <div className="character-2">
            <img src={url_actor_2} width="25px" height="25px" />
            <span>{actor_2}</span>
          </div>
        </div>
        <div className="badge-delete-container">
          { display === EDIT &&
            <img onClick={ deleteBadge } src="images/trash.png" />
          }
        </div>
      </div> 
    }
    </li>
  );
};

export default ShowBadgeItem;