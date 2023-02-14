// External imports
import React, { useEffect, useState } from "react";
import axios from 'axios';

// Components
import AdmirerItem from "./AdmirerItem";
import AdmiringItem from "./AdmiringItem";

// Styling
import './Main.scss';


const Main = () => {

  const [ admirers, setAdmirers ] = useState([]);
  const [ admiring, setAdmiring ] = useState([]);

  useEffect(()=> {
    let tempdata;

    axios.get(`/admire/find?method=p_admirer`)
      .then( res => {
        tempdata = res.data.data.rows;
        return axios.get(`/admire/find?method=p_admiring`)
      })
      .then ( res => {
        setAdmirers(tempdata);
        setAdmiring(res.data.data.rows);
      });

  }, [])

  const admirerItem = admirers.map( admirer => {

    return (
      <AdmirerItem
        key={ admirer.user_id }
        id={ admirer.user_id }
      />
    ); 
  });

  const admiringItem = admiring.map( admirer => {
    return (
      <AdmiringItem
        key={ admirer.admiring }
        id={ admirer.admiring}
      />
    ); 
  });

  return (
    <div className="profile-display page"> 
      <div className="profile-headers">
        <img src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" height="100px" width="100px" />
        <span>Admirers</span><p/>
      </div>
      <div className="profile-content-lists">
        { admirers.length !== 0 && <ul>{admirerItem}</ul> }
      </div>
      <div className="profile-headers">
      <img src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" height="100px" width="100px" />
      <span>Admiring</span><p/>
      </div>
      <div className="profile-content-lists">
        { admiring.length !== 0 && <ul>{admiringItem}</ul> }
      </div>
    </div>
  );
};

export default Main;