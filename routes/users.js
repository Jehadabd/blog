var express = require('express');
var router = express.Router();
const userControl=require('../controls/userControls')
const authMid=require('../middilwares/auth')
/* GET users listing. */

router.post('/register',userControl.register)
router.get('/login',userControl.login)
module.exports = router;
