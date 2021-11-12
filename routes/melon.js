var express = require('express'); 
const melon_controlers= require('../controllers/melon'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', melon_controlers.melon_view_all_Page ); 
module.exports = router; 