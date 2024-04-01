module.exports = (app) => {
    const users = require('./user.controller.js');
    const photos = require('./photo.controller.js');
    const payments = require('./payment.controller.js');

    app.get('/users', users.findAll);
    app.get('/users/:userId', users.findOne);
    app.post('/users', users.create);
    app.put('/users/:userId', users.update);
    app.delete('/users/:userId', users.delete); 
    app.post('/login', users.login); 
    app.get('/photos', photos.findAll);
    app.get('/photos/:photoId', photos.findOne);
    app.post('/photos', photos.create);
    app.put('/photos/:photoId', photos.update);
    app.delete('/photos/:photoId', photos.delete);
    
    
    app.post('/payments/userId',payments.userPaymentedPhoto);
    app.get('/adminPayments', payments.findAll); 
    app.post('/payments/history', payments.paymented);
    app.post('/payments', payments.payment);  
}