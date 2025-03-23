const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const connectDatabase=require('./config/connectDatabase');
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}`);
})