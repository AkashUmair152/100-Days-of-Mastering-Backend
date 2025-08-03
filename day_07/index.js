const express = require('express');
const app = express();
const path = require('path');
const UserModel = require("./userModel");

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the User Management System</h1>');
});

app.get('/create', async (req, res) => {
    
   const user = await UserModel.create({
        name: "kashi",
        email: "kashi@gmail.com",
        age: 22,
        password: "12345"
    })

    res.send(user);

});

app.get("/update", async (req, res) => {
    const updatedUser = await UserModel.findOneAndUpdate(
        { name: "Akash" },
        { 
         name: "kasho",
         email: "kasho@gamil.com"
},
        { new: true }
    );
    res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
    const deletedUser = await UserModel.findOneAndDelete({ name: "kasho" });
    res.send(deletedUser);
});

app.get("/users", async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
});

app.get("/user", async (req, res) => {
    const user = await UserModel.findOne({ name: "kashi" });
    res.send(user);
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});