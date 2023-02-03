import React from "react";

const CritiqueSelectMain = props => {

  return (
    <div className="critique-select">
      <img
        className="add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </div>
  )
}

export default CritiqueSelectMain;