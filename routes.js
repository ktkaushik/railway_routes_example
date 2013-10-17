var routing = require('railway-routes'),
    kontroller = require('kontroller'),
    mw = require('./middleware');


exports.init = function (app) {
  var map = new routing.Map(app, handler);

  map.root('home#index', { middleware: mw.permissions() } );
  map.get('/posts', 'posts#index');
  // map.resources('users');
  // map.namespace('admin', function (admin) {
  //   admin.resources('tasks');
  // });

  // Stories Kontroller
  // map.get('/stories','stories#brake');
  // map.get('/load','stories#load');
};

function handler(ns, controller, action) {
  // try {
      var ctlFile = './controllers/' + ns + controller + '_controller';
      var responseHandler =  require(ctlFile);
      return responseHandler[action];
  // } catch(e) {}
  // return responseHandler || function (req, res) {
  //     res.send('Handler not found for ' + ns + controller + '#' + action);
  // };
};