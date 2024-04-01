const Photo = require('./photo.model.js')
exports.create = (req, res) => {
    const photo = new Photo({
        photoId: req.body.photoId,
        amount: req.body.amount,
        name : req.body.name,
        info : req.body.info,
        imgUrl : req.body.imgUrl
    });
    photo.save()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({message:err.message});
    });
};

exports.findAll = (req,res)=> {
    Photo.find()
    .then(photos => {
        
        res.send(photos);
        console.log(photos)
    })
    .catch(err => {
        res.status(500).send({message:err.message})
    });
};

exports.findOne = (req,res) => {
    Photo.findOne({photoId : req.body.photoId})
    .then(photo => {
        if(!photo){
            return res.status(404).send({
                message: req.params.photoId + "에 해당되는 사진이 없습니다."});
        }
        res.send(photo);
    }).catch(err => {
        return res.status(500).send({message: req.params.photoId + "로 검색 중 에러 발생"});
    });
};


exports.update = (req,res) => {
    Photo.findOneAndUpdate( {photoId:req.params.photoId},
        {
            photoId: req.body.photoId,
            amount: req.body.amount,
            name : req.body.name,
            info : req.body.info,
            imgUrl : req.body.imgUrl
        },
        {new:true}
        ).then(photo => {
            if(!photo) {
                return res.status(404).send({ message: req.params.photoId+ "에 해당하는 사진이 발견되지 않았습니다."})
            }
            $socket.emit('smart',{res:req.body.name});
            res.send(photo);
        }).catch(err => {
            return res.status(500).send({message:err.message});
        });
};

exports.delete = (req,res) => {
    Photo.findOneAndDelete({photoId:req.params.photoId})
    .then(photo => {
        if(!photo) {
            return res.status(404).send({message: req.params.photoId+"에 해당하는 사진이 없습니다."})
        }
        res.send({message:"정상적으로"+req.params.photoId+" 사진이 삭제되었습니다."})
    })
    .catch(err => {
        return res.status(500).send({message:err.message});
    });
};