const express = require('express');
const app = express();

// Use the port supplied by the host environment or fallback to 3000
const PORT = process.env.PORT || 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from my first Node.js program!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});