# Day 03: 100 Days of Mastering Backend

## 📅 Date

july, 28, 2025

## 📚 Topics Covered

- Introduction to Express.js, a minimal and flexible Node.js web application framework.
- Setting up a basic Express server.
- Implementing middleware for logging HTTP requests.
- Creating simple routes (`/` and `/about`).
- Handling errors using Express error-handling middleware.

## 📝 Notes

### Example Code

```js
const express = require("express");

const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// About route with error
app.get("/about", (req, res, next) => {
  return next(new Error("This is an error from the /about route"));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### Challenges Faced

- Understanding the flow of middleware and error handling in Express.
- Debugging route-specific errors.

### Useful Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Official Site](https://nodejs.org/)

## 🚀 Progress

- Built a basic Express server with custom middleware and error handling.
- Learned how to structure routes and handle errors gracefully.

**Next Steps:**

- Explore route parameters and query strings.
- Learn about serving static files and using third-party middleware.

---