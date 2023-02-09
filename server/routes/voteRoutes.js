//External Imports
const express = require( 'express' );
const router  = express.Router();

// Internal Helper function
const db = require( '../db/connection' );


//Route to add to existing table
router.post( '/add', ( req, res ) => {
  
  console.log('add votes: ', req.body)
  
  const upvotePage =`
    INSERT INTO votes
    (
      creator_id,
      episode_id,
      upvoted
    )
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [ req.session.userID, req.body.episode_id, req.body.upvoted ]

  db.query( upvotePage, values )
    .then( () => res.send( 'success!' ))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
});

router.patch( '/update', ( req, res ) => {
  console.log('add votes: ', req.body)

  const upvotePage =`
    UPDATE votes
    SET upvoted = $1
    WHERE episode_id = $2
    AND creator_id = $3;
  `;

  const values = [ req.body.upvoted, req.body.episode_id, req.session.userID ]

  db.query( upvotePage, values )
  .then( () => res.send( 'success!' ))
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });
});


//Get all voted pages
router.get( '/user', ( req, res ) => {

  const voteQuery = `
  SELECT * FROM votes
  WHERE id = ${req.params.id};
  `;

  db.query( voteQuery )
  .then( data => {
    const voteData = data.rows[ 0 ];
    res.json({ userData: voteData });
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
    const voteData = data.rows[ 0 ];
    res.json({ userData: voteData });
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


module.exports = router;
