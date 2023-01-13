const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//If an api request is made, it will send you to index.js which will route you to api routes
app.use('/api', api);
// Only other req is an html req, so if it doesnt send you to api routes, then server can handle html requests
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// GET Route for retrieving all the tips


// GET Route for retrieving all the feedback


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
