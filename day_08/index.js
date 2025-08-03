const express= require('express');
const app = express();
const path =require('path');
const UserModel = require("./models/user");
const { name } = require('ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/read",async (req,res)=>{
    let users = await UserModel.find()
    res.render("read", {users})
})
app.post("/create", async(req,res)=>{
    let {userName, email, Profession, Image} = req.body;
const createdUser = await UserModel.create({
        userName,
        email,
        Profession,
        Image
    })
    // console.log(createdUser);
    res.redirect("/")
})

app.get("/delete/:id", async (req,res)=>{
    let users = await UserModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.get("/edit/:userid", async (req,res)=>{
    let user = await UserModel.findOne({_id:req.params.userid})
    res.render("edit", {user})
})

app.post("/update/:userid", async (req, res) => {

        const { userName, email, Profession, Image } = req.body;
        await UserModel.findByIdAndUpdate(req.params.userid, {
            userName,
            email,
            Profession,
            Image
        });
        res.redirect("/read");
     
});


app.listen(3000, ()=>{
    console.log("server is running at port http://localhost:3000/");
})