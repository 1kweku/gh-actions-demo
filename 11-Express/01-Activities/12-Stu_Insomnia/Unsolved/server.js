const express = require('express');
// TODO: Require the json file located in `/db`
const db = require('./db/repos.json');

const  PORT = 3001;

// TODO: Create an `app` variable set to the value of `express()`
const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file
app.get('/repos', (req, res) => {
  res.json(db)
})

// TODO: Have the app listen on port 3001
app.listen(PORT, () => {
 console.log(`listening on http://localhost:${PORT}`)
})