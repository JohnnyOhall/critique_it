const express = require( 'express' );
const router  = express.Router();
const db = require( '../db/connection' );
const bcrypt = require('bcryptjs');

//Routes
router.delete( '/:id/deactivate', ( req, res ) => {

  const disableUsers = user => {

    const disableUser = `
    UPDATE users
    SET active = FALSE,
    updated = (to_timestamp(${ Date.now() } / 1000.0))
    WHERE id = $1;
    `;

    const values = [ user.id ];

    if ( Number( req.params.id ) !== user.id ) {
      return res.send( 'Invalid Request ...' )
    };

    return db.query( disableUser, values )
      .then(() => {
        res.send( 'User Deactivated!' )
        req.session = null;
      })
      .catch(( err ) => console.log( err.message ));

  };

  disableUsers( req.body );

});


router.patch( '/:id/reactivate', ( req, res ) => {

  const enableUsers = user => {

    const enableUser = `
    UPDATE users
    SET active = TRUE,
    updated = (to_timestamp(${ Date.now() } / 1000.0))
    WHERE id = $1
    RETURNING *;
    `;

    const values = [ user.id ];

    if ( Number( req.params.id ) !== user.id ) {
      return res.send( 'Invalid Request ...' );
    };

    return db.query( enableUser, values )
      .then(( data ) => {

        const { email, id } = data.rows[ 0 ];

        req.session.userID = id;
        res.json({ email });

      })
      .catch(( err ) => console.log( err.message ));

  };

  enableUsers( req.body );

});


router.patch( '/:id/update', ( req, res ) => {

  const enableUsers = user => {

    const enableUser = `
    UPDATE users
    SET email = $1,
    updated = (to_timestamp(${ Date.now() } / 1000.0))
    WHERE id = $2
    RETURNING *;
    `;

    const values = [ user.email, user.id ];

    if ( Number( req.params.id ) !== user.id ) {
      return res.send( 'Invalid Request ...' );
    };

    return db.query( enableUser, values )
      .then(( data ) => {
        const email = data.rows[ 0 ].email;
        res.json({ email });
      })
      .catch(( err ) => {
        console.log( err.message );
      });

  };

  enableUsers( req.body );

});


router.get( '/', ( req, res ) => {

  const userQuery = `
  SELECT * FROM users;
  `;

  db.query( userQuery )
  .then( data => {
    const userData = data.rows;
    res.json({ userData })
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


router.get( '/:id', ( req, res ) => {

  const userQuery = `
  SELECT * FROM users
  WHERE id = $1;
  `;

  values = [ req.body.id ];

  if ( Number( req.params.id ) !== req.body.id ) {
    return res.send( 'Invalid Request ...' );
  };

  db.query( userQuery, values )
  .then( data => {
    const userData = data.rows[ 0 ];
    !userData.active ? 
      res.send( 'User Inactive!' ) :
      res.json({ userData });
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});


router.post( '/register', ( req, res ) => {

  const addUser = user => {

    bcrypt.genSalt( 10, ( err, salt ) => {

      bcrypt.hash( user.password, salt, ( err, hash ) => {
      
        const registerUser = `
          INSERT INTO users (email, password)
          VALUES ($1, $2)
          RETURNING *;
        `;

        const values = [ user.email, hash ];

        return db.query( registerUser, values )
          .then(( data ) => {
            const email = data.rows[ 0 ].email;
            req.session.userID = data.rows[ 0 ].id;
            res.json({ email });
          })
          .catch(( err ) => console.log( err.message ));

      });
    });
  };

  addUser( req.body );

});


router.post( '/login', async ( req, res ) => {

  const queryString = `
  SELECT * FROM users
  WHERE email = '${ req.body.email }';
  `;

  try {
    const data = await db.query( queryString );
    const { email, id, active, password } = data.rows[ 0 ];

    if ( !active ) return res.status( 401 ).send( 'User Inactive!' );

    bcrypt.compare( req.body.password, password ).then(( result ) => {
      if ( !result ) return res.status( 401 ).send( 'invalid password!' );
    
      req.session.userID = id;
      res.json({ email });
    });

  } 
  catch ( err ) { 
    res.status( 500 ).json({ error: err.message });
  };

});


router.post( '/logout', ( req, res ) => {

  req.session = null;
  res.send( 'Logged-out Successfully!' )

});


module.exports = router;
