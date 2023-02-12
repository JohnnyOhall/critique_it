import React from "react";
import axios from "axios";

const EpisodesItem = props => {

  const { id, number, name} = props

  return (
    <li>
      <span>{number}: {name}</span>
    </li>
  );
};

export default EpisodesItem;