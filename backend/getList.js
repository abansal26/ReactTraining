const express = require('express');
const router = express.Router();

const list = require('./list');

router.get('/', (req, res) => {
  res.status(200).send(list);
})

module.exports = router;