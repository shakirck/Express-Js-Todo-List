const mongoose = require('mongoose');

//Creating a schema for the database
const listSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due:{
      type:String,
      required:false
     }


});

const List =  mongoose.model('List',listSchema);
module.exports = List;