import React from "react";

const ShowBoxItem = props => {

  const { text, url, style } = props;

  // console.log("items", text, url, style)

  return (
    <li className="show-box-item">
    { style === 1 && 
      <div> 
        <img src={url} height="100px" width="100px" />
      </div> 
    }

    { style === 2 && 
      <div> 
        <p>{text}</p>
      </div> 
    }

    { style === 3 && 
      <div>
        <span>{text}</span>
        <img src={url} height="75px" width="75px" />
      </div> 
    }
    </li>
  )
}

export default ShowBoxItem;