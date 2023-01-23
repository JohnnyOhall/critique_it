const express = require('express');
const router  = express.Router();

const { shows } = require('../resource/testData')

//Routes
router.get('/', ( req, res ) => {
  res.json( shows );
})

router.post('/', ( req, res ) => {
  const newID = Math.random().toString( 36 ).substring( 2, 5 )

  const newShow = {
    id: newID,
    title: req.body.showTitle,
    img: req.body.img,
    seasons: req.body.seasons,
    episodes: [
      {
        season: req.body.season,
        episode: req.body.episode,
        title: req.body.episodeTitle
      }
    ]
  }

  shows.push( newShow )

  res.json({ newShow })
})

// POSTMAN for fake posts

//PUT - replaces a  resource completely
//PATCH - repalces a peice of resource
//POST - resource creation

module.exports = router;