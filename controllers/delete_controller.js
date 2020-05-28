
 
module.exports.delete = function(req,res){
     const List = require('../models/list');
     console.log(req.body);

      
     var keys = Object.keys(req.body);
     console.log(keys)

     for(let id of keys){
          console.log(`Deleting Id ${id}`);
          List.findByIdAndDelete(id,function(err){
               if(err){
                    console.log("error while deleting Task");
                    return;
               }
          });

          
     }
     return res.redirect('back');
}