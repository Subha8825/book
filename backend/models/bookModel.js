const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    booktitle:String,
    bookauthor:String,
    bookprice:Number,
    bookpublishedyear:Number
})


const bookModel=mongoose.model('Book',bookSchema)

module.exports=bookModel;

