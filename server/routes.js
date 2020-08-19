const banana = require('./controller/bananaC');

exports.routes = (app) => {

    app.route('/banana')
    .get(banana.getBananas)
    .post(banana.addBanana);

    app.route('/banana/:id')
    .get(banana.getBanana)
    .delete(banana.deleteBanana);

};
