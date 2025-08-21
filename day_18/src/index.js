// require('dotenv').config({path: "./env"}) 
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
})


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is Runing at the Port: ${process.env.PORT}` );
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed", err);
})
