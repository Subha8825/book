const bookModel = require("../models/bookModel")

exports.updateBook=async(req,res,next)=>{
    try{
        const updateBook=await bookModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }) 
        if(!updateBook){
            return res.status(404).json({
                message:"Book Not Found"
            })
        }
        return res.status(200).json({
            message: "Book updated successfully",
            book: updateBook
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}