const express = require('express');

const app = express();

const users = [
    {id:1, name:"John", age:20},
    {id:2, name:"Jane", age:21},
    {id:3, name:"Jim", age:22},
    {id:4, name:"Jill", age:23},
    {id:5, name:"Jack", age:24},
    {id:6, name:"Jill", age:25},
    {id:7, name:"Jack", age:26},
    {id:8, name:"Jill", age:27},
    {id:9, name:"Jack", age:28},
    {id:10, name:"Jill", age:29}
];

const posts = [
    {id:1, title:"Post 1", content:"Content 1"},
    {id:2, title:"Post 2", content:"Content 2"},
    {id:3, title:"Post 3", content:"Content 3"},
    {id:4, title:"Post 4", content:"Content 4"},
    {id:5, title:"Post 5", content:"Content 5"},
];

app.get('/', (req, res) => {
    res.send("home page");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});