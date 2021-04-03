const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('../backend/routes/matches.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use('/public', express.static('public'));

app.use('/api', api)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});