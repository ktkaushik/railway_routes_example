var acl = require('acl'),
    acl = new acl(new acl.memoryBackend()),
    mongosee = require('mongoose'),
    http = require('http');

acl.addUserRoles('kt', 'admin', function(err) {});
acl.addUserRoles('mike', 'admin', function(err) {});
acl.addUserRoles('cory', 'admin', function(err) {});

acl.allow('admin', 'home', '*', function(err) {});

exports.permissions = function permissions () {
  acl.isAllowed( 'kt', 'home', '*', function(err, res) {
    console.log(res);
    if (res) {
      console.log('message');
    };
  });
};
