const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { routes } = require('./routes');
const app = express();
const port = 3000;

// Setup database connection
if(process.env.NODE_ENV === 'production'){
        mongoose.connect(`mongodb+srv://TestUser:${process.env.MONGO_PW}@eoncluster-deeoa.gcp.mongodb.net/test?retryWrites=true&w=majority`,
            {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
}else{
mongoose.connect('mongodb://localhost/my-moo',
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    }

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bind routes
routes(app);

// Error handling
app.use((err, req, res, next) => {
    res.status(400).send('ERROR: ' + err.message);
    console.log('ERROR:' + err.message);
});

app.listen(process.env.PORT || port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
