
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , fs = require('fs')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
// module dependencies

mongoose.set('debug', true);
var connection = mongoose.connect('mongodb://localhost/users', {
  server: {
    poolSize: 3
  }
});

// load models...
var modelsPath = path.join(process.cwd(), 'models')
  , models = fs.readdirSync(modelsPath);

// load each model with the exception 
// of files prefixed with an underscore
models.forEach(function(model) {
  if (model.charAt(0) !== '_') {
    require(path.join(modelsPath, model));
  }
});

exports.connection = connection;

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes').init(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});