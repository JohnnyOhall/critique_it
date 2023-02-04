// ------------- EXTERNAL IMPORTS --------------- //
import React from "react";

const ShowListItem = props => {
  const { name, img } = props;

  return (
    <li className="show-item">
      <div className="show-img">
        <img
          src={img}
          height="100px"
          width="100px"
        />
      </div>
      <div className="show-name">
        <button>
          { name }
        </button>
      </div>
    </li>
  );
};

export default ShowListItem;