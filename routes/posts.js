// routes/comments.js
const express = require('express');
const fakePosts = require('../data/posts');
const router = express.Router();

// Get a list of posts
router.get('/', (req, res) => {
    res.json(fakePosts);//
  });





  //afin de pouvoir importer ce routeur depuis un autre fichier.
  module.exports = router;