// External Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// Providers
import { CritiqueContext } from "../../../../providers/CritiqueProvider";

// Styles
import './Boxes.scss'

const Boxes = props => {
  
  const [ style, setStyle ] = useState( 0 );
  const [ characters, setCharacters ] = useState( 0 );
  const [ danger, setDanger ] = useState( false );
  const [ pageInfo, setPageInfo ] = useState( {} );

  const { 
    episodeInfoGlobal, 
    MAIN, 
    EDIT, 
    setDisplay, 
    setCreate,
    setBoxes,
    boxes 
  } = useContext( CritiqueContext )

  useEffect(() => {
    setPageInfo({
      ...pageInfo,
      style: 0,
      url: '',
      text: '',
      page_id: episodeInfoGlobal.page_id,
    })

  }, [])

  const post = () => {
    const page_id = episodeInfoGlobal.page_id

    setPageInfo({...pageInfo, page_id})
    
    axios.post('./boxes/add', pageInfo )
      .then((res) => {
        const extract = res.data.data.rows[0]
        setBoxes([...boxes, extract]);
        setCreate(MAIN);
        setDisplay(EDIT);
      })
  }

  return (
    <section className="box-outer">
      <div className="box-inner">

        <div className="select-box">
          <div className="box-title">
            <span> Select a Layout: </span>
          </div>
          <div className="box-content" onChange={ e => {
            setStyle( e.target.value )
            setPageInfo({...pageInfo, style: e.target.value })
            setCharacters(0)
            setDanger(false)
          }}> 
            <div className="box-item">
              <img src="images/boxes/box-1.png" height="225px" width="225px"/>
              <input type='radio' name='box' value={ 1 } ></input>
            </div>
            <div className="box-item">
              <img src="images/boxes/box-2.png" height="225px" width="225px"/>
              <input type='radio' name='box' value={ 2 }></input>
            </div>
            <div className="box-item">
              <img src="images/boxes/box-3.png" height="225px" width="225px"/>
              <input type='radio' name='box' value={ 3 }></input>
            </div>
          </div>
        </div>

        { style === 0 && 
          <div className="box-input">
            <p>Please make a lay-out selection above!</p>
          </div> 
        }

        { style === "1" && 
          <div className="box-input">
            <p>Please enter an image url:</p>
            <input 
              type="url" 
              className="url" 
              placeholder="Paste url here"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url: e.target.value })
              }}/>
          </div> 
        }

        { style === "2" && 
          <div className="box-input">
            <p>Please enter your thoughts (225 characters max):</p>
            <textarea 
              placeholder="Type here" 
              maxLength={225}
              onChange={e => {
                setCharacters(e.target.value.length)
                setDanger(characters >= 200 ? true : false)
                setPageInfo({ ...pageInfo, text: e.target.value })
              }}
            /> 
            <p style={{color: danger ? "red" : "black"}}>{characters}</p>
          </div> 
        }

        { style === "3" && 
          <div className="box-input"> 
            <p>Please leave a short message (25 characters max): </p>
            <input 
              className="short" 
              type="text" 
              placeholder="Type here"
              maxLength={ 25 }
              onChange={ e => {
                setCharacters( e.target.value.length )
                setDanger( characters >= 20 ? true : false )
                setPageInfo({ ...pageInfo, text: e.target.value })
              }}
            /> 
            <span style={{ color: danger ? "red" : "black" }}>{ characters }</span>
            <p>Please enter an image url:</p>
            <input 
              className="url" 
              type="url" 
              placeholder="Paste url here"
              onChange={ e => {
                setPageInfo({ ...pageInfo, url: e.target.value })
              }}
            />    
          </div> 
        }


        <div className="box-buttons">
          <button onClick={post}>Add</button>
          <button onClick={()=> setCreate(MAIN)}>Back</button>
        </div>

      </div>
    </section>
  );
};

export default Boxes;