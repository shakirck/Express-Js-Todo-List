const express  = require('express');

const router = express.Router();
const url = require('url');


// loading controllers 
const homeController = require('../controllers/home_controller');
const deleteController = require('../controllers/delete_controller');
 console.log('Router loaded');


 //Routing 
router.get('/',homeController.home);
router.post('/create',homeController.create);
router.post('/delete-todo',deleteController.delete);
 





module.exports = router;