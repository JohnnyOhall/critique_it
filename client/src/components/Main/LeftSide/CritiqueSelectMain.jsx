import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ShowListItem from "./ShowListItem";
import { GlobalContext } from "../../Application";

const CritiqueSelectMain = props => {
  const [ showDisplay, setShowDisplay ] = useState([]);
  const { loggedIn } = useContext( GlobalContext )

  useEffect( () => {
    if ( loggedIn ) {
      axios.get( '/pages/main' )
      .then( res => {
        const data = res.data.pageData
        const unique = [...new Set( data.map( item => item.show_id ))]
        const array = []
  
        for (const show of unique) {
  
          const extract = data.find( item => item.show_id === show );
          const showObj = {
            id: show,
            name: extract.show_title,
            img: extract.show_img
          };
  
          array.push( showObj );
        }

        setShowDisplay( array ); 
      });
      
    } else {
      setShowDisplay([]);
    };
    
  }, [ loggedIn ]);

  const showItem = showDisplay.map( show => {
    return (
      <ShowListItem
        key={ show.id }
        show_id={ show.id }
        name={ show.name }
        img={ show.img }
      />
    ); 
  });

  return (
    <div className="critique-select">
      <img
        className="add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
      <section className="user-shows">
        <ul className="show-list">{ showItem }</ul>
      </section>
    </div>
    
  )
}

export default CritiqueSelectMain;