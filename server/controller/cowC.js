const {Cow} = require('../model/cow');
const prometheus = require('./prometheusC');

// Method to add a single cow to database
exports.addCow = (req, res, next) => {
  const cow = new Cow(req.body);
  cow.save((err, task) => {
    if (err) return next(err);
    res.send(cow);
    console.info('Added a cow!');
    prometheus.promCowManipulations.inc({operation: 'add'}, 1);
  });
};

// Method to get all cow from database
exports.getCows = (req, res, next) => {
  Cow.find({}, (err, cows) => {
    if (err) return next(err);
    res.send(cows);
    console.info('Sent all cows!');
  });
};

// Method to get a single cow to database
exports.getCow = (req, res, next) => {
  Cow.findOne({_id: req.params.id}, (err, cow) => {
    if (err) return next(err);
    res.send(cow);
    console.info('Sent the requested cow!');
  });
};

// Method to get a single cow to database
exports.updateWeight = (req, res, next) => {
  if (!req.body.weight) return res.status(400).
      send('property "weight" is missing');
  if (isNaN(req.body.weight)) return res.status(400).
      send('property "weight" has to be a number');
  Cow.updateOne({_id: req.params.id}, {weight: req.body.weight}, (err, cow) => {
    if (err) return next(err);
    res.send(cow);
    console.info('Sent the requested cow!');
    prometheus.promCowManipulations.inc({operation: 'update-weight'}, 1);
  });
};

// Method to delete a single cow to database
exports.deleteCow = (req, res, next) => {
  Cow.remove({_id: req.params.id}, (err) => {
    if (err) return next(err);
    res.send({info: 'Deleted a cow!'});
    console.info('Deleted a cow!');
    prometheus.promCowManipulations.inc({operation: 'delete'}, 1);
  });
};
