//External Imports
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
  WHERE creator_id = $1
  AND episode_id IS NULL;
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
      res.json({ pageData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });

});

// Route to get show by id
router.get( '/edit/:id', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE creator_id = $1 AND id = $2;
  `;

  values = [ req.session.userID, req.params.id ];

  db.query( pageQuery, values )
    .then( data => {
      const pageData = data.rows[0];
      res.json({ pageData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });

});



// Route to get show by id
router.post( '/view', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE creator_id = $1 
  AND episode_id = $2
  `;

  values = [ req.session.userID, req.body.episode_id ];

  db.query( pageQuery, values )
    .then( data => {
      const pageData = data.rows[0];
      res.json({ pageData });
    })
    .catch( err => {
      res
        .status( 500 )
        .json({ error: err.message });
    });

});

// Route to get show by id
router.get( '/view/:id', ( req, res ) => {

  const pageQuery = `
  SELECT * FROM pages
  WHERE id = ${req.params.id}
  `;

  db.query( pageQuery )
    .then( data => {
      const pageData = data.rows[0];
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
    
    const buildPage = `
    INSERT INTO pages 
    (
      show_id,
      season_id,
      episode_id,
      show_title,
      creator_id,
      season_num,
      episode_num,
      votes
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
    `; 

    const values = [ 
      page.show_id,
      page.season_id,
      page.episode_id,
      page.name,
      req.session.userID,
      page.season,
      page.number,
      1
    ];

    return db.query( buildPage, values )
      .then((data) => res.json(data.rows))
      .catch(( err ) => {
        console.log(err)
        res.status(409).json({err: "show already exists"})});

  };

  createPage( req.body );
});


// Page to update an existing page record already in DB (or null recorded from add)
router.patch( '/update', ( req, res ) => {
  const createPage = page => {

    const buildPage = `
    UPDATE pages 
    SET
      show_id = $1,
      show_title = $2,
      show_img = $3,
      season_id = $4,
      avatar = $6,
      episode_id = $5,
      color = $7,
      votes = $8,
      rating = $9,
      review = $10,
      watched_on = $11,
      updated = (to_timestamp(${ Date.now() } / 1000.0))
    WHERE episode_id = $5
    AND creator_id = $12;
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
      .then(() => res.send( 'Page Updated!' ))
      .catch(( err ) => console.log( err.message ));

  };

  createPage( req.body );
});

router.patch( '/votes', ( req, res ) => {

  if (!req.session.userID) {
    return res.send('Invalid vote - please login!')
  }

  const type = req.query.type
  const page_id = req.query.page_id
  
  if (type === "upvote") {

    const upVote = `
      Update pages
      SET votes = votes + 1
      WHERE id = ${page_id}
      RETURNING *;
    `;

    return db.query( upVote )
      .then((data)=> res.json({data}))
      .catch(console.log)
  }

  if (type === "downvote") {

    const downVote = `
      Update pages
      SET votes = votes - 1
      WHERE id = ${page_id}
      RETURNING *;
    `;

    return db.query( downVote )
      .then((data)=> res.json({data}))
      .catch(console.log);
  }

})

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

router.get( '/search/user/:id', async ( req, res ) => {

  const queryShowsByUser =`
    SELECT DISTINCT show_title, show_id FROM pages
    WHERE creator_id = ${req.params.id}
    AND episode_id IS NULL;
  `;

  try {
    const data = await db.query(queryShowsByUser);
    return res.json({ data });
  } catch (err) {
    console.log(err);
    res.send('error', err);
  }

})

router.get( '/search/show/:id', async ( req, res ) => {

  const queryShow =`
    SELECT DISTINCT show_title, show_id FROM pages
    WHERE show_id = ${req.params.id}
    AND episode_id IS NULL;
  `;

  try {
    const data = await db.query(queryShow);
    return res.json({ data });
  } catch (err) {
    console.log(err);
    res.send('error', err);
  }

})

router.get( '/search/showitem', async ( req, res ) => {

  const queryEpisodesByShow =`
    SELECT DISTINCT * FROM pages
    WHERE creator_id = ${req.query.userid}
    AND show_id = ${req.query.showid}
    AND episode_id IS NOT NULL;
  `;

  try {
    const data = await db.query(queryEpisodesByShow);
    return res.json({ data });
  } catch (err) {
    console.log(err);
    res.send('error', err);
  }

})

router.get( '/search/critiques/:id', async ( req, res ) => {

  const queryPagesByEpisode =`
    SELECT * FROM pages
    WHERE episode_id = ${req.params.id};
  `;

  try {
    const data = await db.query(queryPagesByEpisode);
    return res.json({ data });
  } catch (err) {
    console.log(err);
    res.send('error', err);
  };

});

router.get( '/profile/userstats', (req, res)  => {
  
  const results = {
    score: 0,
    shows: 0,
    episodes: 0
  }
  
  const getScoreQuery =`
    SELECT SUM(votes)
    FROM pages
    WHERE creator_id = ${req.session.userID};
  `;
  const getShowsQuery = `
    SELECT COUNT( DISTINCT show_id)
    FROM pages
    WHERE creator_id = ${req.session.userID}
    AND episode_id IS NULL;
  `;
  const getEpisodesQuery =`
    SELECT COUNT(episode_id)
    FROM pages
    WHERE creator_id = ${req.session.userID}
    AND episode_id IS NOT NULL;
  `;

  return db.query( getScoreQuery )
    .then( res => {
      results.score = res.rows[0].sum;
      
      return db.query( getShowsQuery );
    })
    .then( res => {
      results.shows = res.rows[0].count;
      
      return db.query( getEpisodesQuery )
    })
    .then( data => {
      results.episodes = data.rows[0].count;
      
      return res.json({results})
    })
    .catch(err => console.log(err))

})

router.get( '/explore/userstats/:id', (req, res)  => {
  
  const results = {
    score: 0,
    shows: 0,
    episodes: 0
  }
  
  const getScoreQuery =`
    SELECT SUM(votes)
    FROM pages
    WHERE creator_id = ${req.params.id};
  `;
  const getShowsQuery = `
    SELECT COUNT( DISTINCT show_id)
    FROM pages
    WHERE creator_id = ${req.params.id}
    AND episode_id IS NULL;
  `;
  const getEpisodesQuery =`
    SELECT COUNT(episode_id)
    FROM pages
    WHERE creator_id = ${req.params.id}
    AND episode_id IS NOT NULL;
  `;

  return db.query( getScoreQuery )
    .then( res => {
      results.score = res.rows[0].sum;
      
      return db.query( getShowsQuery );
    })
    .then( res => {
      results.shows = res.rows[0].count;
      
      return db.query( getEpisodesQuery )
    })
    .then( data => {
      results.episodes = data.rows[0].count;
      
      return res.json({results})
    })
    .catch(err => console.log(err))

})


module.exports = router;