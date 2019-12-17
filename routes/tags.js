// routes/comments.js
const express = require('express');
const Faketags = require('../data/tags');
const router = express.Router();
const fakePosts = require('../data/posts');
// Get a list of posts
//routeur qui va gérer les appels à l'URL /api/comments
// Get a list of comments
router.get('/', (req, res) => {
    res.json(Faketags);// here is the data json in folder data
  });
//http://localhost:8000/api/tags/5/posts
  router.get(('/:tagId/posts'),(request, response) => {
    let resPosts = []
    let id = parseInt(request.params.tagId)
    
    fakePosts.map(post => {
        console.log(post.tag_ids)
        console.log(id)
        if(post.tag_ids.includes(id)) {
            resPosts.push(post)
        }
    })
    console.log(resPosts)
    response.send(resPosts).status(200)
});

  module.exports = router;