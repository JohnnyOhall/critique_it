//External Imports
const express = require( 'express' );
const router  = express.Router();

// Internal Helper function
const db = require( '../db/connection' );

router.post( '/add', ( req, res ) => {
  
  const createBadge =`
    INSERT INTO badges
    (
      badge_id,
      actor_1,
      actor_2,
      url_actor_1,
      url_actor_2,
      page_id
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [ 
    req.body.badge_id, 
    req.body.actor_1, 
    req.body.actor_2, 
    req.body.url_actor_1, 
    req.body.url_actor_2, 
    req.body.page_id 
  ]

  db.query( createBadge, values )
    .then( data => res.json({ data }))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
});

router.get( '/:id', (req, res) => {

  const getBadges =`
  SELECT * FROM badges
  WHERE page_id = ${req.params.id}
  `

  db.query( getBadges )
    .then (data => res.json({data}))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
})


module.exports = router;