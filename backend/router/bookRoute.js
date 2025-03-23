const express=require('express');
const { getAllBooks, getBookById } = require('../controllers/bookControllers');
const { addBook } = require('../controllers/addBookController');
const { updateBook } = require('../controllers/updateBook');
const router=express.Router();

router.route('/getBooks').get(getAllBooks)
router.route('/getBook/:id').get(getBookById)
router.route('/addBook').post(addBook);
router.route('/updateBook/:id').put(updateBook);

module.exports=router;