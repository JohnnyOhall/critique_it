// External imports
import React, { useContext, useState } from "react";
import axios from 'axios';

// Components
import ShowItem from "./ShowItem";
import SeasonItem from "./SeasonItem";

// Providers
import { ExploreContext } from "../../../../providers/ExploreProvider";

// Styling
import './styles.scss';
import './ShowResults.scss';
import './UserResults.scss';


const ExploreSelect = props => {

  const [ search, setSearch ] = useState( "show" );
  const [ searchValue, setSearchValue ] = useState( '' );

  const [ userInfo, setUserInfo ] = useState( {} );
  const [ showInfo, setShowInfo ] = useState( {} );

  const [ showsInfo, setShowsInfo ] = useState( [] );
  const [ seasonsInfo, setSeasonsInfo ] = useState( [] );

  const { PROFILE, DEFAULT, setDisplay, setProfileGlobal} = useContext(ExploreContext)

  const displayUser = () => {
    setDisplay(PROFILE);
  }

  const searchUser = () => {
    let tempUserInfo;
    setSearchValue("");

    axios.get( `users/search/${ searchValue }` )
      .then( res => {
        tempUserInfo = res.data.userData
        setProfileGlobal( tempUserInfo.id )
        return axios.get( `pages/search/user/${ tempUserInfo.id }` )
      })
      .then( res => {
        setUserInfo(tempUserInfo);
        setShowsInfo(res.data.data.rows);
        setSearchValue('');
      })
      .catch( console.log );
  };

  const searchShow = () => {
    let tempShowInfo;
    setSeasonsInfo( [] );
    setShowInfo( {} );
    setSearchValue("");

    axios.get( `http://api.tvmaze.com/search/shows?q=${ encodeURIComponent( searchValue )}` )
      .then(res =>{
        if ( res.data.length === 0 ) {
          alert('No results found')
          tempShowInfo = 'error';
          return 
        }

        tempShowInfo = res.data[0].show
        return axios.get( `pages/search/show/${tempShowInfo.id}`)
      })
      .then(res => {
        if ( tempShowInfo === "error" ) {
          return 
        }

        if (res.data.data.rowCount === 0) {
          alert('No users have watched this yet!')
          tempShowInfo = 'error';
          return 
        }

        return axios.get( `http://api.tvmaze.com/shows/${tempShowInfo.id}/seasons`)
      })
      .then( res => {
        if (tempShowInfo === "error") {
          return
        }

        setShowInfo(tempShowInfo)
        setSeasonsInfo(res.data)
      })
      .catch( console.log );
  };

  const showItem = showsInfo.map( show => {
    return (
      <ShowItem
        key={ show.show_id }
        show_title={ show.show_title }
        show_id={ show.show_id }
        user_id={ userInfo.id }
        avatar={ userInfo.avatar }
      />
    ); 
  });

  const seasonItem = seasonsInfo.map( season => {
    return (
      <SeasonItem
        key={ season.id }
        id={ season.id }
        number={ season.number }
      />
    ); 
  });

  return (
    <section className="explore-left" id="nav-explore">
      <div className="explore-select">

        <section className="search-nav">
          <div className="explore-search">
            <label htmlFor="search-bar">Search:</label>
            { search === "show" &&
              <div className="search-area"> 
                <input 
                  id="search-bar" 
                  type="text" 
                  placeholder="Enter a show name"
                  value={searchValue}
                  onChange={ e => setSearchValue( e.target.value )}
                />
                { searchValue === "" && <img src="images/search.png" height="35px" width="35px"/> }
                { searchValue !== "" && <img 
                  src="images/search.png" 
                  height="35px" 
                  width="35px"
                  onClick={ searchShow }
                /> }
              </div>
            }
            { search === "user" &&
              <div className="search-area">
                <input 
                  id="search-bar" 
                  type="text" 
                  placeholder="Enter a username"
                  value={searchValue}
                  onChange={ e => setSearchValue( e.target.value )}
                />
                { searchValue === "" && <img src="images/search.png" height="35px" width="35px"/> }
                { searchValue !== "" && <img 
                  src="images/search.png" 
                  height="35px" 
                  width="35px"
                  onClick={ searchUser }
                /> }
              </div>
            }
          </div>

          <div className="search-select">
            <div className="radio">
              <label htmlFor="show">Show</label>
              <input 
                type="radio" 
                name="search" 
                value="show" 
                id="show"
                onChange={ e => {
                  setSearch( e.target.value )
                  setSeasonsInfo([]);
                  setShowInfo([]);
                  setUserInfo([]);
                  setShowsInfo([]);
                }}
                checked={ search === "show" }
              />
            </div>
            <div className="radio">
              <label htmlFor="show">User</label>
              <input 
                type="radio" 
                name="search" 
                value="user" 
                id="user"
                onChange={ e => {
                  setSearch( e.target.value )
                  setSeasonsInfo([]);
                  setShowInfo([]);
                  setUserInfo([]);
                  setShowsInfo([]);
                }}
                checked={ search === "user" }
              />
            </div>
          </div>
        </section>

        { search === "show" && 
          <section className="show-results">
            <div className="show-search-results">
              <div className="show-name-results">
                <span className="show-title">{ showInfo.name }</span>
              </div>
              { seasonsInfo.length !== 0 && 
                <div className="season-results">
                  <span className="title"> SEASONS:</span>
                  <ul className="season-list tree">{ seasonItem }</ul> 
                </div>
              }
            </div> 
          </section>
        }

        { search === "user" && 
          <section className="user-results">
            <div className="user-search-results">
              <div className="users">
                <span onClick={displayUser} className="users-name">{ userInfo.username }</span> 
              </div>
              <div className="shows">
                { showsInfo.length !== 0 && 
                <div>
                  <span className="shows-name"> SHOWS:</span>
                  <ul className="show-list tree">{ showItem }</ul>
                </div>
                }
              </div>
            </div>
          </section>
        }
      </div>
    </section>
  );
};


export default ExploreSelect;




// Code for user if we want to change back to list view:
// { showsInfo.length !== 0 && 
//   <div>
//     <span className="users-name">USERS:</span> 
//     <ul>
//       <li onClick={displayUser}>{ userInfo.username }</li>
//     </ul>
//   </div>
// }