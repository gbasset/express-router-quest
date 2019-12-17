// routes/comments.js
const express = require('express');
const fakeComments = require('../data/comments');
const router = express.Router();

//routeur qui va gérer les appels à l'URL /api/comments
// Get a list of comments
router.get('/', (req, res) => {
    res.json(fakeComments);// here is the data json in folder data
  });
  

  //afin de pouvoir importer ce routeur depuis un autre fichier.
  module.exports = router;