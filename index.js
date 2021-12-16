const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var nodemailer = require("nodemailer");
const {contactUs} = require("./app.controller.js");
const bodyParser = require('body-parser');











app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
   
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/profile',function(req,res){ 
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/morepage',function(req,res){ 
    res.sendFile(path.join(__dirname+'/morepage.html'));
});
app.get('/projects',function(req,res){ 
    res.sendFile(path.join(__dirname+'/projects.html'));
});
app.get('/contacts',function(req,res){ 
    res.sendFile(path.join(__dirname+'/contacts.html'));
});
app.get('/form',function(req,res){ 
    res.sendFile(path.join(__dirname+'/form.html'));
});

app.post('/contactUs',contactUs);






app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');