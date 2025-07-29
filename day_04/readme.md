# Day 04: 100 Days of Mastering Backend

## 📅 Date

July 29, 2025

## 📚 Topics Covered

- Setting up an Express server with EJS as the templating engine.
- Using middleware: `express.json()`, `express.urlencoded()`, and `express.static()`.
- Rendering dynamic EJS views.
- Creating static routes (`/`, `/about`) and dynamic routes (`/users/:userName`).
- Using `path` module to handle file paths.

## 📝 Notes

### Example Code

```js
const express = require('express');
const path = require('path');
const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// About page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

// Dynamic user profile page
app.get('/users/:userName', (req, res) => {
  const userName = req.params.userName;
  res.render('userProfile', { title: `${userName}'s Profile`, userName });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
