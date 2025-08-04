const express = require('express');
const app = express();
const path =require('path');
const cookieParser= require("cookie-parser")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userModel = require("./model/user")


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extend: true}));
app.set("view engine", "ejs");
app.use(cookieParser());


// app.get('/', async (req, res) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash('Akash', salt);
//   console.log('Hash:', hash);
//   res.json({ original: 'Akash', hash: hash });
// });

// app.get("/",(req,res)=>{
//     let token = jwt.sign({email: "akashumair5@gmail.com"}, "pololololo")
//     res.cookie("token", token)
//     res.send("hello Cookies with jwt ")

// })

// app.get("/read", (req,res)=>{
//     let data = jwt.verify(req.cookies.token, "pololololo" )
//     res.send(data)
// })


app.get("/", (req,res)=>{
    res.render("index")
})

app.get('/register', (req, res) => {
  res.render('/register');
});

app.post("/register", async (req,res)=>{
    let {userName, email, age, password} =req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    let createdUser =  await userModel.create({
        userName,
        email,
        age,
        password: hash
    })
   let token=  jwt.sign({email}, "akashUmair");
    res.cookie("token", token)
    res.render("login")
})


app.get('/login', (req, res) => {
  res.render('login');
});
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    // Step 1: Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    // Step 2: Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // ✅ Login successful
      let token=  jwt.sign({email}, "akashUmair");
      res.cookie("token", token)
      res.render("profile", {
      userName: user.userName,
      email: user.email,
      age: user.age || "Not provided"
    });
    } else {
      // ❌ Password incorrect
      res.status(401).send("Invalid credentials");
    }
  
});


app.post("/logout", (req, res) => {
  // You can later add JWT or session clearing
  res.cookie("token", "")
  res.redirect("/login"); // Redirect to login page
});



app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/");
})