// External Imports
import React, { useState } from "react";


const ShowListItem = props => {
  const { name, img } = props;

  const [ select, setSelect ] = useState( false )
  const [ season, setSeason ] = useState( 1 );
  const [ seasonMax, setSeasonMax ] = useState( 5 )

  return (
    <li className="show-item">
      <div className="show-img">
        <img
          src={ img }
          height="100px"
          width="100px"
          onClick={ () => setSelect( select ? false : true )}
        />
      </div>
      { !select &&
        <div className="show-name">
          <button>
            { name }
          </button>
        </div>
      }
      { select &&
        <div className="slider-season">
          <span className="season-title">Season</span>
          <span className="season-number">{ season }</span>
          <input
            type="range"
            min={ 1 }
            max={ seasonMax }
            onChange={ e => setSeason( e.target.value )}
            value={ season }
          />
        </div>
      }
    </li>
  );
};

export default ShowListItem;