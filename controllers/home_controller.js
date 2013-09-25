exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.show = function (req, res) {
  res.send('show');
};

exports.edit = function (req, res) {
  res.send('edit');
};

exports.destroy = function (req, res) {
  res.send('destroy');
};