const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});
app.get('/about',(req, res) => {
    res.render('about', { title: 'About Page' });
})

// Dynamic route for user profile
app.get('/users/:userName', (req, res) => { 
    const userName = req.params.userName;
    res.render('userProfile', { title: `${userName}'s Profile`, userName });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});