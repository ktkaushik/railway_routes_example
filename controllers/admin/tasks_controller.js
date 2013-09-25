exports.index = function(req, res, next) {
  res.render('admin/tasks/index', {title: 'Tasks', verb: 'index'});
};
