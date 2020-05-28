const List   = require('../models/list');


module.exports.home= function(req,res){
    var checkedElement;
    List.find({ },function(err,List){
        if(err){
            console.log('error while fetching database');
            return ;
        }
        
        return res.render('home',{
            list: List,
            checked : checkedElement
        });
    });
};
 

module.exports.create= function(req,res){
      
    List.create(req.body,function(err,newList){
        if(err){
          

            console.log(req.body)
            res.send(req.body);
            console.log('Error Occured while inserting into database');
            return;
        }
        console.log(`*********************${newList}`);
        var date = req.body.due;
        return res.redirect('back');
    });
};
 
