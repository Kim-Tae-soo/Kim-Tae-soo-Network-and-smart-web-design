const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    userId: {type: String, require:true},
    password: {type: String, require:true},
    name: { type: String, require:true},
    birth: {type: String, require:true},
});


module.exports = mongoose.model('User', UserSchema);