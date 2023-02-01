const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

// POSTMAN for fake posts

//PUT - replaces a  resource completely
//PATCH - repalces a peice of resource
//POST - resource creation

//Routes
router.get('/', (req, res) => {
  const userQuery = `
  SELECT * FROM users;
  `

  db.query(userQuery)
  .then(data => {
    const userData = data.rows;
    console.log('back-end:', userData)
    res.json({userData})
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

})

router.post('/register', (req, res) => {

  const addUser = function (user) {

    const registerUser = `
    INSERT INTO users (email)
    VALUES ($1)
    RETURNING *;
    `;
    const values = [user.email]

    return db.query(registerUser, values)
      .then(() => res.send('Registration Successful'))
      .catch((err) => {
        console.log(err.message);
      })
  }

  addUser(req.body)
})


module.exports = router;