const mongoose = require('mongoose');

var PhotoSchema = mongoose.Schema({
    photoId: {type: String, require:true}, 
    amount: {type: Number, require:true}, 
    name:{type: String, require:true},
    imgUrl : {type: String, require:true},
    info: {type: String, require:true},
});


module.exports = mongoose.model('Photo', PhotoSchema);