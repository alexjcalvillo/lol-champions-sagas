const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ALL CHAMPIONS
router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM champion;`)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
// GET ALL ATTRIBUTES

// GET CHAMPIONS WITH ATTRIBUTES

module.exports = router;
