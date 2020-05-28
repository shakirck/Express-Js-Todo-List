const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-dev');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error Occured While Connecting to Database'));


db.once('open',function(){
    console.log("Successfully Connected To Database");
});

module.exports = db;