var express = require('express');
var router = express.Router();
const postControl=require('../controls/postControls')
const authMid=require('../middilwares/auth')
router.post('/',authMid.check,postControl.create)
router.get('/',authMid.check,postControl.list)
router.post('/:id',authMid.check,postControl.addComment)
router.get('/:id/comments',authMid.check,postControl.listComments)
router.get('/:id',authMid.check,postControl.acouint)
module.exports = router;