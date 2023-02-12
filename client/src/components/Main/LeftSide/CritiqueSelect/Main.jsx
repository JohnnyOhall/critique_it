// External imports
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

//Components & Hooks
import ShowListItem from "./ShowListItem";

//Providers
import { LoginContext } from "../../../../providers/LoginProvider";


const Main = props => {
  const [ showDisplay, setShowDisplay ] = useState([]);
  const { loggedIn } = useContext( LoginContext );

  useEffect( () => {
    if ( loggedIn ) {
      axios.get( '/pages/main' )
        .then( res => {
          const data = res.data.pageData
          const uniqueItems = [...new Set( data.map( item => item.show_id ))]
          const showArr = []
        
          for ( const show of uniqueItems ) {
          
            const extract = data.find( item => item.show_id === show );

            const showObj = {
              id: show,
              name: extract.show_title,
              img: extract.show_img
            };
          
            showArr.push( showObj );
          }

          setShowDisplay( showArr ); 
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
      <div className="main">
        <section className="main-add-button">
          <img
            className="add-button"
            src="images/add.png"
            alt="Add"
            onClick={ props.onAdd }
          />
        </section>
        <section className="user-shows">
          <ul className="show-list">{ showItem }</ul>
        </section>
      </div>
    </div>
    
  );
};


export default Main;