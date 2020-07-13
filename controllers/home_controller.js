const List   = require('../models/list');


module.exports.home= function(req,res){
     
    List.find({ },function(err,List){
        if(err){
            console.log('error while fetching database');
            return ;
        }
        
        return res.render('home',{
            list: List
        });
    });
};
 

module.exports.create= function(req,res){
    const moment = require('moment');
      let date = req.body.due;
    //check if date is empty or not
    if(date.length!=0){
        req.body.due =moment(date).format('ll');
    }else{
        req.body.due ="NO DEADLINE!";
    }
    List.create(req.body,function(err,newList){
        if(err){
          

            console.log(req.body)
            // res.send(req.body);
            console.error('Error Occured while inserting into database');
             return res.redirect('back');
        }
        // console.log(`*********************${newList}`);
        var date = req.body.due;
        return res.redirect('back');
    });
};
 
