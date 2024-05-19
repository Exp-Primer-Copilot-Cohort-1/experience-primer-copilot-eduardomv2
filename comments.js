// Create web server
const express = require('express');
const app = express();
// Create a server
const server = require('http').createServer(app);
// Create a socket server
const io = require('socket.io')(server);

// Set the port
const PORT = 3000;

// Set the root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Set the comments path
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.html');
});

// Set the comments path
app.get('/comments.js', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Socket server
io.on('connection', (socket) => {
  console.log('A user connected');
  // When the client sends a new comment
  socket.on('newComment', (comment) => {
    // Emit the new comment to all connected users
    io.emit('newComment', comment);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});