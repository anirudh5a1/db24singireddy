var express = require('express'); 
const melon_controlers= require('../controllers/melon'); 
var router = express.Router(); 
 
/* GET melons */ 
router.get('/', melon_controlers.melon_view_all_Page ); 
router.get('/detail', melon_controlers.melon_view_one_Page); 
router.get('/create', melon_controlers.melon_create_Page); 
router.get('/update', melon_controlers.melon_update_Page); 
router.get('/delete', melon_controlers.melon_delete_Page); 
module.exports = router; 