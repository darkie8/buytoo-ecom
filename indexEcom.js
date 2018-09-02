const app = require('express')(); // to use express
const mongoose = require('mongoose'); // to use mongoose
const fs = require('fs');

//using body-parser and cookie-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

let modelPath= './model';
fs.readdirSync(modelPath).forEach(file =>{
if(~file.indexOf('.js')) require(`${modelPath}/${file}`)} )