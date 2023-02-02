const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

//Routes
router.delete('/:id/deactivate', (req, res) => {
  const disableUsers = function (user) {

    const disableUser = `
    UPDATE users
    SET active = FALSE
    WHERE id = $1;
    `

    const values = [user.id]

    if (Number(req.params.id) !== user.id) {
      return res.send('Invalid Request ...')
    }

    return db.query(disableUser, values)
      .then(() => res.send('User Deactivated!'))
      .catch((err) => {
        console.log(err.message);
      })
  }

    disableUsers(req.body)
})

router.patch('/:id/reactivate', (req, res) => {
  const enableUsers = function (user) {

    const enableUser = `
    UPDATE users
    SET active = TRUE
    WHERE id = $1;
    `

    const values = [user.id]

    if (Number(req.params.id) !== user.id) {
      return res.send('Invalid Request ...')
    }

    return db.query(enableUser, values)
      .then(() => res.send('User Reactivatred!'))
      .catch((err) => {
        console.log(err.message);
      })
  }

  enableUsers(req.body)
})

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