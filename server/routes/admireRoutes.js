//External Imports
const express = require( 'express' );
const router  = express.Router();

// Internal Helper function
const db = require( '../db/connection' );


// Route admire another user
router.post( '/add/:admire_id', ( req, res ) => {
  
  const admireUser =`
    INSERT INTO admiration (user_id, admiring)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const values = [ 
    req.session.userID, 
    req.params.admire_id
  ]

  db.query( admireUser, values )
    .then( () => res.send( 'success! added admiration...' ))
    .catch( console.log );
});

// Route to remove admiration
router.delete( '/delete/:admire_id', ( req, res ) => {

  const removeAdmire =`
  DELETE FROM admiration
  WHERE user_id = ${req.session.userID}
  AND admiring = ${req.params.admire_id};
  `;

  db.query( removeAdmire )
    .then( () => res.send( 'success! removed admiration...' ))
    .catch( console.log );
});


// Routes to get admiring / admirer for profile and explore
router.get( '/find', ( req, res ) => {

  const method = req.query.method;
  const id = req.query.id;
  let query;

  method === "p_admiring" 
    && (query = `SELECT admiring FROM admiration WHERE user_id = ${req.session.userID};`);
  method === "p_admirer" 
    && (query = `SELECT user_id FROM admiration WHERE admiring = ${req.session.userID};`);
  method === "e_admiring" 
    && (query = `SELECT admiring FROM admiration WHERE user_id = ${id};`);
  method === "e_admirer" 
    && (query = `SELECT user_id FROM admiration WHERE admiring = ${id};`);
  method === "e_status" 
    && (query = `SELECT EXISTS(SELECT 1 FROM admiration WHERE user_id=${req.session.userID} and admiring = ${id})`);
  

    // select exists(select 1 from contact where id=12)
  console.log(query)
  db.query( query )
    .then( data => res.json({ data }))
    .catch( console.log );

});

module.exports = router;