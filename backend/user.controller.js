const User = require('./user.model.js');
exports.create = (req, res) => {
    console.log(req.body.userId);
    const user = new User({
        userId: req.body.userId,
        password: req.body.password,
        name: req.body.name,
        birth: req.body.birth,

    });

    user.save()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({message:err.message});
    });
};

exports.login = (req,res)=>{
    console.log(req.body.userId);
    if(req.cookies.auth){
        res.redirect('/');
    }
    User.findOne({userId : req.body.userId, password: req.body.password})
    .then(user => {
        if(!user){
            return res.status(404).send({
                message: req.body.userId + "에 해당되는 사용자가 없습니다."});
        }
            res.send(user)
            console.log(user);
    }).catch(err => {
        return res.status(500).send({message: req.body.userId + "로 검색 중 에러 발생"});
    });
};


exports.findAll = (req,res)=> {
    User.find()
    .then(users => {
        res.send(users);
        console.log(users);
    })
    .catch(err => {
        res.status(500).send({message:err.message});
    });
};


exports.findOne = (req,res) => {
    User.findOne({userId : req.body.userId})
    .then(user => {
        if(!user){
            return res.status(404).send({
                message: req.params.userId + "에 해당되는 사용자가 없습니다."});
        }
        res.send(user);
    }).catch(err => {
        return res.status(500).send({message: req.params.userId + "로 검색 중 에러 발생"});
    });
};

exports.update = (req,res) => {
    User.findOneAndUpdate( {userId:req.params.userId},
        {
            userId: req.body.userId,
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            phone: req.body.phone,
            cardNumber: req.body.cardNumber,
            cardExpirationYear: req.body.cardExpirationYear,
            cardExpirationMonth: req.body.cardExpirationMonth,
        },
        {new:true}
        ).then(user => {
            if(!user) {
                return res.status(404).send({ message: req.params.userId+ "에 해당하는 사용자가 발견되지 않았습니다."})
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({message:err.message});
        });
};

exports.delete = (req,res) => {
    User.findOneAndDelete({userId:req.params.userId})
    .then(user => {
        if(!user) {
            return res.status(404).send({message: req.params.userId+"에 해당하는 사용자가 없습니다."})
        }
        res.send({message:"정상적으로"+req.params.userId+" 사용자가 삭제되었습니다."})
    })
    .catch(err => {
        return res.status(500).send({message:err.message});
    });
};