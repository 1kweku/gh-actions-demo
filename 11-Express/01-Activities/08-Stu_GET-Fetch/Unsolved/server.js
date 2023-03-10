const express = require('express');
const path = require('path');
const petData = require('./db/animals.json');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/pets', (req, res) => res.json(petData));

app.get('/api/pets/:name', (req, res) => {
  const requestedPet = req.params.name.toLowerCase();

  if (requestedPet) {
    for(let i=0; i < petData.length; i++) {
      if (requestedPet === petData[i].name.toLowerCase()) {
        return res.json(petData[i]);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
