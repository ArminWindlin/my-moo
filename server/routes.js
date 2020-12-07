const cow = require('./controller/cowC');
const prometheus = require('./controller/prometheusC');

exports.routes = (app) => {

    app.route('/cow')
        .get(cow.getCows)
        .post(cow.addCow);

    app.route('/cow/:id')
        .get(cow.getCow)
        .delete(cow.deleteCow);

    app.route('/cow/updateWeight/:id')
        .put(cow.updateWeight);

    app.route('/')
        .get((req,res) =>
          res.send('my moo is running'));

    /* Prometheus */
    app.route('/metrics')
        .get(prometheus.getMetrics)

};
