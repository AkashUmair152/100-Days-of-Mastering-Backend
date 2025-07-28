const express = require("express");

const app = express();


app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
})   


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res, next) => {
  return next(new Error("This is an error from the /about route"));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});