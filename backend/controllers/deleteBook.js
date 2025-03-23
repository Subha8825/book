const bookModel = require("../models/bookModel")


exports.deleteBook=async(req,res,next)=>{
    try{
        const deleteBook=await bookModel.findByIdAndDelete(req.params.id,req.body,{
            new:true,
        })
        if(!deleteBook){
            return res.status(400).json({
                message:"Book Not Found"
            })
        }
        return res.status(200).json({
            message:"Book Deleted Successfully"
        })

    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}