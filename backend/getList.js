const express = require('express');
const router = express.Router();

const list = require('./list');

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).send(list);
  }, 5000);
})

module.exports = router;