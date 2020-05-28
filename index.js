const express = require('express');
const app = express();
const router = require('./routes');
const PATH = require('path');
const db = require('./config/mongoose');
const List = require('./models/list');
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
// Setup static 
app.use(express.static('./assets'));
//Router
 
app.use('/',router);




//view engine setup
app.set('view engine','ejs');
app.set('views',PATH.join(__dirname,'/views'));
// console.log(PATH.join(__dirname,'/views'));














app.listen(PORT,function(err){
 if(err){
     console.log('Error Starting The Server');
     return;
 }
 console.log('app is running on ',PORT);  
})