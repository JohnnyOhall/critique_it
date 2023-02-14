import React, { useEffect, useState } from "react";
import axios from "axios";

const AdmiringItem = props => {
  const { id } = props;

  const [ username, setUsername ] = useState('')

  useEffect( () => {

    axios.get(`/users/find/${id}`)
      .then( res => {
        setUsername(res.data.data.rows[0].username)
      })
      .catch( console.log )

  }, [])

  return (
    <li>
      {username}
    </li>
  );
};

export default AdmiringItem;