//External Imports
import React from "react";

//components & hooks
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

// Styling
import './styles.scss';


const Main = props => (
  <main>
    <LeftSide />
    <RightSide />
  </main>
);


export default Main;