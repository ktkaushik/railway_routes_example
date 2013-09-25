exports.index = function(req, res) {
  res.send('you are in index :)');
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