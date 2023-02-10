//External Imports
const express = require( 'express' );
const router  = express.Router();

// Internal Helper function
const db = require( '../db/connection' );


//Route to add to existing table
router.post( '/add', ( req, res ) => {
  
  const upvotePage =`
    INSERT INTO votes
    (
      creator_id,
      voter_id,
      page_id,
      episode_id,
      upvoted
    )
    VALUES ($1, $1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [ req.session.userID, req.body.page_id, req.body.episode_id, req.body.upvoted ]

  db.query( upvotePage, values )
    .then( () => res.send( 'success!' ))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
});

router.patch( '/update', ( req, res ) => {

  const upvotePage =`
    UPDATE votes
    SET upvoted = $1
    WHERE page_id = $2
    AND voter_id = $3;
  `;

  const values = [ req.body.upvoted, req.body.page_id, req.session.userID ]

  db.query( upvotePage, values )
  .then( () => res.send( 'success!' ))
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


//Get all voted pages
router.post( '/user', ( req, res ) => {

  const voteQuery = `
  SELECT * FROM votes
  WHERE creator_id = $1
  AND voter_id = $1
  AND page_id = $2;
  `;

  const values = [ req.session.userID, req.body.page_id ]
  console.log('back-end: ', values)
  db.query( voteQuery, values )
    .then( data => {
   
      const voteData = data.rows[ 0 ];
      res.json({ voteData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
  });

});

//Get all voted pages
router.get( '/', ( req, res ) => {

  const voteQuery = `
    SELECT * FROM votes;
  `;

  db.query( voteQuery )
  .then( data => {
    const voteData = data.rows;
    res.json({ voteData });
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


module.exports = router;
