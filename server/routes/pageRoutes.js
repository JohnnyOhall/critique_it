const express = require( 'express' );
const router  = express.Router();
const db = require( '../db/connection' );


router.get( '/', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages;
  `;

  db.query( pageQuery )
  .then( data => {
    const pageData = data.rows;
    res.json({ pageData })
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


router.get( '/main', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE creator_id = $1;
  `;

  values = [ req.session.userID ];


  db.query( pageQuery, values )
  .then( data => {
    const pageData = data.rows;
    res.json({ pageData })
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


router.post( '/create', ( req, res ) => {

  const createPage = page => {

    const buildPage = `
    INSERT INTO pages 
    (
      show_id,
      show_title,
      show_img,
      season_id, 
      episode_id, 
      creator_id
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `; 

    const values = [ 
      page.id,
      page.name,
      page.image,
      page.seasonID,
      page.episodeID,
      req.session.userID
    ];

    return db.query( buildPage, values )
      .then(() => res.send( 'Page Created!' ))
      .catch(( err ) => console.log( err.message ));

  };

  createPage( req.body );

});


router.patch( '/:id/update', ( req, res ) => {

  const createPage = page => {

    const buildPage = `
    UPDATE pages 
    SET show_id = $1, 
    season_id = $2, 
    episode_id = $3, 
    creator_id = $4,
    updated = (to_timestamp(${ Date.now() } / 1000.0))
    WHERE id = $5
    AND creator_id = $4;
    `;

    const values = [ 
      page.showID,
      page.seasonID,
      page.episodeID,
      page.userID, //add req.session.userID for production
      page.id
    ];

    if ( page.id !== Number( req.params.id )) {
      return res.send( 'Invalid request...' );
    };

    return db.query( buildPage, values )
      .then(() => res.send( 'Page Updated!' ))
      .catch(( err ) => console.log( err.message ));

  };

  createPage( req.body );

});


router.delete ( '/:id/delete', ( req, res ) => {

  const deletePages = page => {

    const deletePage = `
    DELETE FROM pages
    WHERE id = $1 
    AND creator_id = $2;
    `;

    values = [ page.id, page.userID ]; //add req.session.userID for production

    if ( page.id !== Number( req.params.id )) {
      return res.send( 'Invalid request...' );
    };

    return db.query( deletePage, values )
      .then(() => res.send( 'Page Deleted!' ))
      .catch(( err ) => console.log( err.message ));

  };

  deletePages( req.body );

});


module.exports = router;