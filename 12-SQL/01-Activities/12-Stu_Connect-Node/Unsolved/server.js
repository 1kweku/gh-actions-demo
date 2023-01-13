//express and mysql packages
const express = require('express');
const mysql = require('mysql2');
//makes PORT the environments port or 3001
const PORT = process.env.PORT || 3001;
//initialize express
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//creates connection to mysql database
const db = mysql.createConnection(
  { //authentification information
    host: '127.0.0.1',
    user: 'root',
    password: '',
    //specifying which db will be queried
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);
//selects all values from students table, logs data
//first arguement is SQL command, written in SQL
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
