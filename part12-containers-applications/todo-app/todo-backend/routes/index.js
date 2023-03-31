const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('redis')
const {getAsync} = require("../redis");
let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get("/statistics", async (req, res) => {
  const added = await getAsync("added_todos");
  res.json({added_todos: Number(added)});
})

module.exports = router;
