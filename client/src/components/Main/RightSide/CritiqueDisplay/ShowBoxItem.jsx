// External Imports
import React, { useContext } from "react";
import axios from "axios";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styles
import "./ShowBoxItem.scss";


const ShowBoxItem = props => {

  const { text, url, style, id } = props;
  
  const { EDIT, display, setBoxes, episodeInfoGlobal } = useContext( CritiqueContext );

  const deleteBox = () => {
    axios.delete(`boxes/${ id }`)
      .then( () => {
        return axios.get(`boxes/${ episodeInfoGlobal.page_id }`)
      })
      .then(res => {
        const extractBox = res.data.data.rows;
        setBoxes( extractBox );
      })
      .catch( console.log );
  }

  return (
    <li className="show-box-item">
    { style === 1 &&
      <>
        <div className="single-box-image"><img src={url} /></div>
        <div className="box-delete-container">
          { display === EDIT &&
            <img 
              className="box-delete" 
              onClick={ deleteBox } 
              src="images/trash.png" 
            />
          }
        </div>
      </>
    }
    { style === 2 && 
      <>
        <div className="single-box-text"><p>{text}</p></div>
        <div className="box-delete-container">
          { display === EDIT &&
            <img 
              className="box-delete" 
              onClick={ deleteBox } 
              src="images/trash.png" 
            />
          }
        </div>
      </>
    }
    { style === 3 && 
      <>
        <div className="single-box-combined">
          <span>{text}</span>
          <img src={url}  />
        </div>
        <div className="box-delete-container">
          { display === EDIT &&
            <img 
              className="box-delete" 
              onClick={ deleteBox } 
              src="images/trash.png" 
            />
          }
        </div>
      </> 
    }
    </li>
  )
}

export default ShowBoxItem;
