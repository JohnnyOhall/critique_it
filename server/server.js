// load .env data into process.env
require( 'dotenv' ).config();

//External Imports
const express = require( 'express' );
const morgan = require( 'morgan' );
const BUILD_PATH = path.resolve('./public');


const app = express();
const port = process.env.PORT || 54321;

//Cookie - encryption
const cookieSession = require( 'cookie-session' );


// Middleware
app.use( morgan( 'dev' ));
app.use( express.urlencoded({ extended: true }));
app.use( express.json());
app.use( express.static(BUILD_PATH));


// Cookie Session
app.use(cookieSession({

  name: 'session',
  keys: [ 'charmander', 'squirtle', 'bulbasaur', 'pikachu' ],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours

}));


app.get('/', (req, res) => {

  filePath = BUILD_PATH + '/index.html'

  if (fs.existsSync(filePath))
  {
      res.sendFile(filePath);
  }
  else
  {
     res.statusCode = 404;
     res.write('404 sorry not found');
     res.end();
  }

})

// Separated Routes for each Resource
const pageRoutes = require( './routes/pageRoutes' );
const userRoutes = require( './routes/userRoutes' );
const voteRoutes = require( './routes/voteRoutes' );
const boxRoutes = require( './routes/boxRoutes' );
const badgeRoutes = require( './routes/badgeRoutes' );
const admireRoutes = require( './routes/admireRoutes' );


// Mount all resource routes
app.use( '/pages', pageRoutes );
app.use( '/users', userRoutes );
app.use( '/votes', voteRoutes );
app.use( '/boxes', boxRoutes );
app.use( '/badges', badgeRoutes );
app.use( '/admire/', admireRoutes );


app.listen( port, () => {
  console.log( `app is listening on port ${ port }` );
})
