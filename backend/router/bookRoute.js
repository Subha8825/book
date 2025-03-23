const express=require('express');
const { getAllBooks, getBookById } = require('../controllers/bookControllers');
const { addBook } = require('../controllers/addBookController');
const router=express.Router();

router.route('/getBooks').get(getAllBooks)
router.route('/getBook/:id').get(getBookById)
router.route('/addBook').post(addBook);

module.exports=router;