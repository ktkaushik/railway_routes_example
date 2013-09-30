var routing = require('railway-routes'),
    kontroller = require('kontroller');;

exports.init = function (app) {
  var map = new routing.Map(app, handler);

  map.root('home#index');
  map.get('/posts', 'posts#index');
  map.resources('users');
  map.namespace('admin', function (admin) {
    admin.resources('tasks');
  });

  // Stories Kontroller
  map.get('/stories','stories#brake');
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