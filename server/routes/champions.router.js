const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ALL CHAMPIONS
router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM champion ORDER BY champion.id;`)
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
router.get('/full', (req, res) => {
  const query = `SELECT champion.id, champion.name, champion.title, champion.details, champion.images, array_agg("attribute".type) as types FROM champion
  JOIN champion_attribute ON champion.id = champion_attribute.champion_id
  JOIN "attribute" ON champion_attribute.attribute_id = attribute.id
  GROUP BY champion.id ORDER BY champion.id;`;

  pool
    .query(query)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
module.exports = router;
