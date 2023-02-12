import React from "react";

const EpisodeItem = props => {

  const {show_title} = props;

  return (
    <li>
      {show_title}
    </li>
  );
};

export default EpisodeItem;