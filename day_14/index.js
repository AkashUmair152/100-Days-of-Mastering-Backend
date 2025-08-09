const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set ("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/",(req, res)=>{
    res.send ("Hello World");
})

app.listen(3000, ()=>{
    console.log("Server is Running at http://localhost:3000/");
})