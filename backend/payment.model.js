const mongoose = require('mongoose');

var PaymentsSchema = mongoose.Schema({
    cardCompany:{type: String, require:true},   
    cardType:{type: String, require:true},     
    cardNumber: {type: String, require:true},  
    amount: {type: String, require:true},      
    orderId: {type: String, require:true},  
    orderName: {type: String, require:true}, 
    paymentKey: {type:String, require:true},   
    photoId: {type:String, require:true},
    info: {type:String, require:true},
    imgUrl: {type:String,require:true},
    lectureName: {type:String,require:true},
    userId: {type: String, require:true},
});

module.exports = mongoose.model('Payment', PaymentsSchema);