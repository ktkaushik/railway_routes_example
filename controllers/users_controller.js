exports.index = function(req, res, next) {
  res.render('users/index', {title: 'Express', verb: 'index'});
};

exports.show = function(req, res, next) {
  res.render('users/show', {title: 'Express', verb: 'show'});
};

exports.new = function(req, res, next) {
  res.render('users/new', {title: 'Express', verb: 'new'});
};

exports.delete = function(req, res, next) {
  res.render('users/delete', {title: 'Express', verb: 'delete'});
};

exports.edit = function(req, res, next) {
  res.render('users/edit', {title: 'Express', verb: 'edit'});
};

exports.create = function(req, res, next) {
  res.render('users/create', {title: 'Express', verb: 'create'});
};

exports.update = function(req, res, next) {
  res.render('users/update', {title: 'Express', verb: 'update'});
};