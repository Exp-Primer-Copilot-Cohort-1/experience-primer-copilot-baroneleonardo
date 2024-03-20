// create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Path: comments.js
// create route for comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// Path: index.js
// import comments.js
const comments = require('./comments');
app.use(comments);

// Path: index.js
// create route for comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});
