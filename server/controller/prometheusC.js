const client = require('prom-client');
const { Cow } = require('../model/cow');

// Create a Registry which registers the metrics
const register = new client.Registry();

// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'my-moo-server'
});

// Enable the collection of default metrics
client.collectDefaultMetrics({ register })

// Create custom metrics
const numberOfCows = new client.Gauge({
    name: 'cows_in_db',
    help: 'The number of cows that are in the database at the current time.'
});
const cowManipulations = new client.Counter({
    name: 'cow_manipulation_counter',
    help: 'The number of cows that are in the database at the current time.',
    labelNames: ['operation']
});
exports.promCowManipulations = cowManipulations;

// Register the histogram
register.registerMetric(numberOfCows);
register.registerMetric(cowManipulations);

// Method to get all cow from database
exports.getMetrics = (req, res, next) => {
    // Return all metrics the Prometheus exposition format
    res.setHeader('Content-Type', register.contentType)
    res.end(register.metrics());

    // Update current number of cows
    Cow.find({}, (err, cows) => {
        if (err) return console.log(err);
        numberOfCows.set(cows.length);
    });
};