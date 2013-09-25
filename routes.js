var routing = require('railway-routes');
// var mw = require('./middleware');

exports.init = function (app) {
    var map = new routing.Map(app, handler);

    map.get('/', 'home#index');

    // generic routes
    // map.all('/:controller/:action');
    // map.all('/:controller/:id/:action');
};

function handler(ns, controller, action) {
    try {
        var ctlFile = './controllers/' + ns + controller + '_controller';
        var responseHandler =  require(ctlFile)[action];
    } catch(e) {}
    return responseHandler || function (req, res) {
        res.send('Handler not found for ' + ns + controller + '#' + action);
    };
}