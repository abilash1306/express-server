//web server
const express = require('express');
//middle ware to handle form data
const bodyParser = require('body-parser');
//package to make requests across different ports
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

PORT = 3000;

app.get('/',function(req,res){
     res.send("Hello from server");
})

app.listen(PORT,function(req,res){
      console.log("Server Running "+PORT);
})

app.post("/enroll",function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Submitted Successfully"});

})


