const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { routes } = require('./routes');
const app = express();
const port = 3000;

// Setup database connection
mongoose.connect('mongodb://localhost/bananas',
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bind routes
routes(app);

// Error handling
app.use((err, req, res, next) => {
    res.status(400).send('ERROR: ' + err.message);
    console.log('ERROR:' + err.message);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
