const cow = require('./controller/cowC');

exports.routes = (app) => {

    app.route('/cow')
    .get(cow.getCows)
    .post(cow.addCow);

    app.route('/cow/:id')
    .get(cow.getCow)
    .delete(cow.deleteCow);

};
