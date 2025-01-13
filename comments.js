// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create comments array
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Route to post a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});