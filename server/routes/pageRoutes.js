//External Imports
const e = require('express');
const express = require( 'express' );
const router  = express.Router();
const db = require( '../db/connection' );


// Route to get all pages created in DB (helper not production)
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


// Route to get all shows by user when cookie is set
router.get( '/main', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE creator_id = $1;
  `;

  values = [ req.session.userID ];

  db.query( pageQuery, values )
    .then( data => {
      const pageData = data.rows;
      res.json({ pageData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });

});


// Route to get show by id
router.get( '/:id', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE creator_id = $1 AND episode_id = $2;
  `;

  values = [ req.session.userID, req.params.id ];

  db.query( pageQuery, values )
    .then( data => {
      const pageData = data.rows;
      // console.log('page data', pageData)
      res.json({ pageData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });

});

// Route to create a new page or add a show with null valus
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


// Route to create a new page or add a show with null valus
router.post( '/newpage', ( req, res ) => {

  const createPage = page => {
    console.log('page: ', page);


    const buildPage = `
    INSERT INTO pages 
    (
      show_id,
      show_title,
      show_img,
      season_id,
      episode_id,
      avatar,
      color,
      votes,
      rating,
      review,
      watched_on,
      creator_id
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;
    `; 

    const values = [ 
      page.show_id,
      page.show_title,
      page.show_img,
      page.season_id,
      page.episode_id,
      page.avatar,
      page.color,
      page.votes,
      page.rating,
      page.review,
      page.watched_on,
      req.session.userID
    ];

    return db.query( buildPage, values )
      .then(() => res.send( 'Page Created!' ))
      .catch(( err ) => console.log( err.message ));

  };

  createPage( req.body );
});


// Page to update an existing page record already in DB (or null recorded from add)
router.patch( '/update', ( req, res ) => {

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


// Route to delete existing pages (not implimented yet)
router.delete ( '/:id/delete', ( req, res ) => {

  const deletePages = page => {

    const deletePage = `
      DELETE FROM pages
      WHERE id = $1 
      AND creator_id = $2;
    `;

    values = [ page.id, req.session.userID ];

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