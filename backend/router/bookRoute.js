const express=require('express')
const router=express.Router();

router.route('/getBooks').get()

module.exports=router;