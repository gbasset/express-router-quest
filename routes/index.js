const express = require('express');
const posts = require('./posts');
const comments = require('./comments');
const fakeTags = require('./tags');
const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);
router.use('/tags', fakeTags);

module.exports = router;