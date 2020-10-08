//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const fs = require('fs');
let rawdata = fs.readFileSync('myBudget.json');
let budget = JSON.parse(rawdata);

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('API served at http://localhost:'+ port);
});