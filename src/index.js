import mongoose from "mongoose";
import { database_name } from "./constants.js";
import connectdb from "./db/index.js";

// require('dotenv').config();
import dotenv from 'dotenv'
import app from "./app.js";
dotenv.config({
    path:'./env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected successfullt")
    })

})
.catch((error)=>{
    console.log(`error: ${error}`)

})


















// older approach
// import  express  from "express";
// const app =express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${database_name}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)

//         })

        
//     } catch (error) {
//         console.log(error)
        
//     }
// })()