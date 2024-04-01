// rest API 시작점
// 미들웨어 설정
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');  
const socketio = require('socket.io');  
const cookieParser =require('cookie-parser');  

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public')); 
app.use(cors());

const dbconfig = require("./db.js");
const mongoose = require('mongoose');

// 데이터베이스 연결 및 상태 로깅
mongoose.connect(dbconfig.url, { useNewUrlParser:true})
// error 처리
.then(() => {
    console.log("정상적으로 MongoDB 서버(mongodb://localhost:27017)에 연결되었습니다.");
}).catch(err => {
    console.log("MongoDB에 연결되지 않았습니다.", err);
});

app.get('/', (req,res) => {
    console.log(req);
    res.json({"message":"test 확인 완료입니다."});
})

// 라우팅, 포트8000 설정
require('./router.js')(app);
var port = process.env.port || 8000;

// 웹 서버 생성
const httpServer = http.createServer(app);  
const io =socketio(httpServer,{
    cors:{
        origin:'http://localhost:8080',     //8080에서 오는것도 허용하게 하는 구문
        method:["GET","POST"]               // get,post허용
    }
});
io.sockets.on('connection',socket=>{
    global.$socket = socket;
    socket.on('rint',(data)=>{
        console.log(data);
        socket.emit('smart',{res:"서버에서 web(client)로 연결요청"});
    });
});

// 클라이언트 요청 대기
httpServer.listen(port, () => { console.log("포트 : " + port + "을 열고 서버 동작 중 입니다.")})