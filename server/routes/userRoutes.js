//External Imports
const express = require( 'express' );
const router  = express.Router();
const bcrypt = require('bcryptjs');

// Internal Helper function
const db = require( '../db/connection' );


//Route to deactive user (will set active to false) - Not in production yet
// router.delete( '/:id/deactivate', ( req, res ) => {

//   const disableUsers = user => {

//     const disableUser = `
//       UPDATE users
//       SET active = FALSE,
//       updated = (to_timestamp(${ Date.now() } / 1000.0))
//       WHERE id = $1;
//     `;

//     const values = [ user.id ]; // set this to req.session.userID (or the other 1)

//     if ( Number( req.params.id ) !== user.id ) {
//       return res.send( 'Invalid Request ...' )
//     };

//     return db.query( disableUser, values )
//       .then(() => {
//         res.send( 'User Deactivated!' )
//         req.session = null;
//       })
//       .catch(( err ) => console.log( err.message ));

//   };

//   disableUsers( req.body );
// });


//Route to reactivate user (will set active to true) - Not in production yet
// router.patch( '/:id/reactivate', ( req, res ) => {

//   const enableUsers = user => {

//     const enableUser = `
//       UPDATE users
//       SET active = TRUE,
//       updated = (to_timestamp(${ Date.now() } / 1000.0))
//       WHERE id = $1
//       RETURNING *;
//     `;

//     const values = [ user.id ]; // set this to req.session.userID (or the other 1)

//     if ( Number( req.params.id ) !== user.id ) {
//       return res.send( 'Invalid Request ...' );
//     };

//     return db.query( enableUser, values )
//       .then(( data ) => {

//         const { email, id } = data.rows[ 0 ];

//         req.session.userID = id;
//         res.json({ email });

//       })
//       .catch(( err ) => console.log( err.message ));

//   };

//   enableUsers( req.body );
// });


router.patch( '/update/password', ( req, res ) => {

  const queryString = `
  SELECT * FROM users
  WHERE email = '${ req.body.email }';
  `;

  db.query( queryString )
    .then(data => {
      password = data.rows[0].password

      return bcrypt.compare( req.body.currentPassword, password )
    })
    .then( result  => {

      if ( !result ) return res.status( 401 ).send( 'invalid password!' );

      bcrypt.genSalt( 10, ( err, salt ) => {

        bcrypt.hash( req.body.password, salt, ( err, hash ) => {
          
          const updatePassword = `
            UPDATE users
            SET password = '${hash}',
            updated = (to_timestamp(${ Date.now() } / 1000.0))
            WHERE id = ${req.session.userID}
            RETURNING *;
          `;

          return db.query( updatePassword )
        });
      });
    })
    .then(( ) => res.send('Password changed Successfully!'))
    .catch(( err ) => {
      console.log( err.message );
    });  
});



router.patch( '/update/bio', ( req, res ) => {

  const updateBio = `
  UPDATE users
  SET bio = '${req.body.bio}',
  updated = (to_timestamp(${ Date.now() } / 1000.0))
  WHERE id = ${req.session.userID}
  RETURNING *;
  `;

  return db.query( updateBio )
    .then(( data ) => {
      const bio = data.rows[ 0 ].bio;
      res.json({ bio });
    })
    .catch(( err ) => {
      console.log( err.message );
    });

});

router.patch( '/update/email', ( req, res ) => {

  const updateEmail = `
  UPDATE users
  SET email = '${req.body.email}',
  updated = (to_timestamp(${ Date.now() } / 1000.0))
  WHERE id = ${req.session.userID}
  RETURNING *;
  `;

  return db.query( updateEmail )
    .then(( data ) => {
      const email = data.rows[ 0 ].email;
      res.json({ email });
    })
    .catch(( err ) => {
      console.log( err.message );
    });

});

router.patch( '/update/username', ( req, res ) => {

  const updateUsername = `
  UPDATE users
  SET username = '${req.body.username}',
  updated = (to_timestamp(${ Date.now() } / 1000.0))
  WHERE id = ${req.session.userID}
  RETURNING *;
  `;

  return db.query( updateUsername )
    .then(( data ) => {
      const username = data.rows[ 0 ].username;
      res.json({ username });
    })
    .catch(( err ) => {
      console.log( err.message );
    });

});



router.patch( '/update/avatar/:avatar', ( req, res ) => {

  const updateAvatar = `
  UPDATE users
  SET avatar = ${req.params.avatar},
  updated = (to_timestamp(${ Date.now() } / 1000.0))
  WHERE id = ${req.session.userID}
  RETURNING *;
  `;

  return db.query( updateAvatar )
    .then(( data ) => {
      const avatar = data.rows[ 0 ].avatar;
      res.json({ avatar });
    })
    .catch(( err ) => {
      console.log( err.message );
    });

});


// Get list of all users - for testing only (not for production)
router.get( '/', ( req, res ) => {

  const userQuery = `SELECT * FROM users;`;

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


//Get specific user ID (not for production - testing only)
router.get( '/:email', ( req, res ) => {

  const userQuery = `
  SELECT email, avatar, username, bio, active FROM users
  WHERE id = ${ req.session.userID };
  `;

  db.query( userQuery )
  .then( data => {
    const userData = data.rows[ 0 ];
    
    userData.email !== req.params.email &&
      res.send( 'Invalid Request ...' );
    
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

//Get specific user ID (not for production - testing only)
router.get( '/avatar/:id', ( req, res ) => {

  const userQuery = `
  SELECT avatar FROM users
  WHERE id = ${ req.params.id };
  `;

  db.query( userQuery )
  .then( data => {
    const avatar = data.rows[ 0 ].avatar;

    res.json({ avatar });
     
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});

router.get( '/explore/:id', ( req, res ) => {

  const userQuery = `
  SELECT email, avatar, username, bio, active FROM users
  WHERE id = ${req.params.id};
  `;

  db.query( userQuery )
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

router.get( '/search/:username', ( req, res ) => {

  const userQuery = `
  SELECT * FROM users
  WHERE username = '${req.params.username}';
  `;

  db.query( userQuery )
  .then( data => {
    const userData = data.rows[ 0 ];

    if (!userData.active) {
      return res.send( 'User Inactive');
    } else {
      return res.json({ userData });
    }
  })
  .catch( err => {
    res
      .status( 500 )
      .json({ error: err.message });
  });

});

router.get( '/find/:id', ( req, res ) => {

  const getUser = `
    SELECT username FROM users
    WHERE id = ${req.params.id};
  `;

  db.query( getUser )
    .then( data => res.json({ data }))
    .catch( console.log );
    
});


// Route to register a new user - not yet in production
router.post( '/register', ( req, res ) => {

  const addUser = user => {

    bcrypt.genSalt( 10, ( err, salt ) => {

      bcrypt.hash( user.password, salt, ( err, hash ) => {
      
        const registerUser = `
          INSERT INTO users (email, password, avatar, username, bio)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *;
        `;

        const values = [ user.email, hash, user.avatar, user.username, user.bio ];

        return db.query( registerUser, values )
          .then(( data ) => {
            const {email} = data.rows[ 0 ];
            req.session.userID = data.rows[ 0 ].id;
            res.json({ email });
          })
          .catch(( err ) => console.log( err.message ));

      });
    });
  };

  addUser( req.body );
});


// Route to login with existing user
router.post( '/login', async ( req, res ) => {

  const queryString = `
  SELECT * FROM users
  WHERE email = '${ req.body.email }';
  `;

  try {
    const data = await db.query( queryString );
    const { email, id, active, password, avatar, username } = data.rows[ 0 ];

    if ( !active ) return res.status( 401 ).send( 'User Inactive!' );

    bcrypt.compare( req.body.password, password ).then(( result ) => {
      if ( !result ) return res.status( 401 ).send( 'invalid password!' );
    
      req.session.userID = id;
      res.json({ email, avatar, username });
    });

  } 
  catch ( err ) { 
    res.status( 500 ).json({ error: err.message });
  };

});


// Route to logout of current session
router.post( '/logout', ( req, res ) => {

  req.session = null;
  res.send( 'Logged-out Successfully!' );

});


module.exports = router;
