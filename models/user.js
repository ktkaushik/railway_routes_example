/**
  * User Model
  */
var mongoose = require('mongoose')
  , Schema   = mongoose.Schema;

/*
 | Schema for User model
*/
UserSchema = new Schema({
  name: String
});

mongoose.model('User', UserSchema);
module.schema = UserSchema;
