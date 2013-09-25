exports.index = function(req, res, next) {
  res.render('posts/index', { title: 'Express', subject: 'Posts' })
};