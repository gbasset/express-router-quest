const express = require('express');

// const posts = require('./routes/posts');
//importer comments.js depuis index.js,
// const comments = require('./routes/comments');

const app = express();
const port = 8000;

const api = require('./routes');
// Cette ligne permet de connecter le routeur - et ses routes - au système de routage fourni par app.
// app.use('/api/comments', comments);
// app.use('/api/posts', posts);
app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});