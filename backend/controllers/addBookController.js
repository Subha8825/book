const bookModel = require("../models/bookModel");

exports.addBook=async(req,res,next)=>{
    const{booktitle,bookauthor,bookprice,bookpublishedyear}=req.body;
    try{
        const duplicateBook=await bookModel.findOne({booktitle,bookauthor});
        if(duplicateBook){
            return res.status(400).json({
                message:"Book with this author is already exist"
            })
        }
        const newBook=new bookModel({booktitle,bookauthor,bookprice,bookpublishedyear})
        await newBook.save();
        return res.status(200).json({
            message:"Book is added"
        })

    }
    catch(error){
        return res.status(500).json({
            message:"Internal server Error"
        })
    }
}