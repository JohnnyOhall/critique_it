// load .env data into process.env
require('dotenv').config();

const express = require( 'express' );
const morgan = require( 'morgan' );

const app = express();
const port = process.env.PORT || 54321;


// Middleware
app.use( morgan( 'dev' ));
app.use( express.urlencoded({ extended: true }));
app.use( express.json());

// Separated Routes for each Resource
const pageRoutes = require('./routes/pageRoutes');
const userRoutes = require('./routes/userRoutes');


// Mount all resource routes
app.use('/pages', pageRoutes);
app.use('/users', userRoutes);


app.listen( port, () => {
  console.log( `app is listening on port ${ port }` );
})
