const Payment = require('./payment.model.js');
const secretKey = "Basic dGVzdF9za19scFAyWXhKNEs4NzRtTnE3eGU5M1JHWndYTE9iOg=="; 
const http = require("https");

exports.paymented = (req,res)=>{
  const payment = new Payment({
    amount: req.body.amount,       
    orderId: req.body.orderId,     
    orderName: req.body.orderName,    
    cardCompany:req.body.cardCompany,
    cardType:req.body.cardType,      
    cardNumber: req.body.cardNumber,   
    paymentKey: req.body.paymentKey,  
    userId:req.body.userId,
    photoId:req.body.photoId,
    lectureName:req.body.lectureName,
    imgUrl:req.body.imgUrl,
    info:req.body.info
  });
  payment.save()
  .then(data => {
      res.send(data);
  })
  .catch(err =>{
      res.status(500).send({message:err.message});
  });

};

exports.findAll = (req,res)=>{
    Payment.find()
    .then(payment => {
        res.send(payment);
        console.log(payment);
    })
    .catch(err => {
        res.status(500).send({message:err.message});
    });
}

exports.userPaymentedPhoto = (req,res)=>{
  console.log("모바일에서 로그인 요청 "+req.body.userId);
  Payment.find({"userId":req.body.userId})
  .then(payments =>{
    res.send({payments:payments});

  })
  .catch(err => {
    res.status(500).send({message:err.message});
  });
}

exports.payment = (req,res)=>{
    let redirectUrl=req.body.paymentsUrlInfo; 
    let index=0;
    let foundIndex=0;
    let foundAnd=0;
    var redirectUrlValue = {
        "orderId":'',
        "paymentKey":'',
        "amount":''
    }
    for (let i in redirectUrlValue){

        foundIndex=redirectUrl.indexOf("=",index) || '-';
        if(i != 'amount'){
            foundAnd=redirectUrl.indexOf("&",index)|| '-';
        }
        else{
            foundAnd=redirectUrl.length;
        }
        if(foundIndex ==-1 || foundAnd==-1) break;
        let value = redirectUrl.substring(foundIndex+1,foundAnd);
        redirectUrlValue[i]=value
        index = foundAnd+1;
    }
    console.log(redirectUrlValue);
    const options = {
        "method": "POST",
        "hostname": "api.tosspayments.com",
        "port": null,
        "path": "/v1/payments"+"/"+redirectUrlValue.paymentKey,   
        "headers": {
          "Authorization": "Basic dGVzdF9za19scFAyWXhKNEs4NzRtTnE3eGU5M1JHWndYTE9iOg==",
          "Content-Type": "application/json"
        }
      };
      const req1 = http.request(options, function (res1) {
        const chunks = [];
      
        res1.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res1.on("end", function () {
          const body = Buffer.concat(chunks); 
          console.log("결제내역입니다.")
          console.log(body.toString());
          console.log("결제내역입니다1.")
          res.send(body.toString());
          console.log("결제내역입니다.2");
        });
      });
      req1.write(JSON.stringify({amount: redirectUrlValue.amount, orderId: redirectUrlValue.orderId}));
      req1.end(); 
};