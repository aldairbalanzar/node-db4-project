const express = require('express');
// const knex = require('knex');

// const knexFile = require('./knexfile');
// // const db = knex(knexFile.development);

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'route to recipes' })
});

module.exports = router;