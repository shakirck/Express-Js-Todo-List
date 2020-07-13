(function(exports){

    // your code goes here

   exports.test = function(){
    document.addEventListener('click',function(){
        console.log('clicked')
         let listElements = document.querySelectorAll('input[type=checkbox]:checked');
         let ids  = [];
         for(var ele of listElements){
             ids.push(ele.dataset.id);
         }
         var obj = {
             data:ids
         }
         console.log(obj);
     
         
     });
    return obj;
    };

})(typeof exports === 'undefined'? this['mymodule']={}: exports);