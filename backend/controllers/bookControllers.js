const bookModel = require("../models/bookModel")

exports.getAllBooks=async(req,res,next)=>{
    try{
        const book=await bookModel.find();
        res.status(200).json(book)     
    }
    catch(error){
        res.status(500).json({
            message:"Internal server Error"
        })
    }

}

exports.getBookById=async(req,res,next)=>{
    try{
        const book=await bookModel.findById(req.params.id);
        if(!book){
            res.status(400).json({
                message:"Book Not Found"
            })
        }
        res.json(book);
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }


}