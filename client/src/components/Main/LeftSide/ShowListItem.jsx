// ------------- EXTERNAL IMPORTS --------------- //
import React from "react";

const ShowListItem = props => {
  const { show_id, name, img } = props;

  return (
    <li className="show-item">
      <p>{ show_id }</p>
      <p>{ name }</p>
      <img
        src={img}
        height="100px"
        width="100px"
      />
    </li>
  );
};

export default ShowListItem;