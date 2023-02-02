const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const pageQuery = `
  SELECT * FROM pages;
  `;

  db.query(pageQuery)
  .then(data => {
    const pageData = data.rows;
    console.log('back-end:', pageData)
    res.json({pageData})
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

})

router.post('/create', (req, res) => {

  const createPage = function (page) {

    const buildPage = `
    INSERT INTO pages (show_id, season_id, episode_id, creator_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;

    const values = [page.showID, page.seasonID, page.episodeID, page.userID]

    return db.query(buildPage, values)
      .then(() => res.send('Page Created!'))
      .catch((err) => {
        console.log(err.message);
      })
  }

  createPage(req.body)
});

module.exports = router;