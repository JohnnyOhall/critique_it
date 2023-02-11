import React from "react";

const ShowBoxItem = props => {

  const { text, url, style } = props;

  // console.log("items", text, url, style)

  return (
    <li className="show-box-item">
    { style === 1 && 
      <div className="single-box-image"> 
        <img src={url} />
      </div> 
    }

    { style === 2 && 
      <div className="single-box-text"> 
        <p>{text}</p>
      </div> 
    }

    { style === 3 && 
      <div className="single-box-combined">
        <span>{text}</span>
        <img src={url}  />
      </div> 
    }
    </li>
  )
}

export default ShowBoxItem;