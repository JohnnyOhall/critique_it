//External Imports
const express = require( 'express' );
const router  = express.Router();

// Internal Helper function
const db = require( '../db/connection' );

router.post( '/add', ( req, res ) => {
  
  const createBox =`
    INSERT INTO boxes
    (
      style,
      url,
      text,
      page_id
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [ 
    req.body.style, 
    req.body.url, 
    req.body.text, 
    req.body.page_id 
  ]

  db.query( createBox, values )
    .then( data => res.json({ data }))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
});

router.get( '/:id', (req, res) => {

  const getBoxes =`
  SELECT * FROM boxes
  WHERE page_id = ${req.params.id}
  `

  db.query( getBoxes )
    .then (data => res.json({data}))
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });
})


module.exports = router;