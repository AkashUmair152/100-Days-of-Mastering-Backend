// index.js
const express = require("express");
const path = require("path");
const userModel = require("./model/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// ✅ Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON (optional for forms)
app.use(cookieParser()); // ✅ Parse cookies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// Show Register Form
app.get("/register", (req, res) => {
  res.render("register");
});

// Handle Register
app.post("/register", async (req, res) => {
  const { userName, email, age, password } = req.body;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already registered.");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create new user
  await userModel.create({
    userName,
    email,
    age: Number(age),
    password: hash,
  });

  // Redirect to login
  res.redirect("/login");
});

// Show Login Form
app.get("/login", (req, res) => {
  // If already logged in, redirect to /user
  if (req.cookies.token) {
    return res.redirect("/user");
  }
  res.render("login");
});

// Handle Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid credentials.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send("Invalid credentials.");
  }

  // Sign JWT
  const token = jwt.sign({ email }, "akashUmair", { expiresIn: "1h" });

  // Set secure cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevent XSS
    secure: process.env.NODE_ENV === "production", // HTTPS in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  // ✅ Redirect to /user (no data passed — that's fine)
  res.redirect("/user");
});

// Middleware: Protect routes
function isLogedin(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const data = jwt.verify(token, "akashUmair");
    req.user = data; // Attach user data
    next();
  } catch (err) {
    // Token invalid or expired
    res.clearCookie("token");
    res.redirect("/login");
  }
}

// User Dashboard (Protected)
app.get("/user", isLogedin, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // ✅ Render with data
    res.render("user", {
      userName: user.userName,
      email: user.email,
      age: user.age || "Not provided",
    });
  } catch (err) {
    res.status(500).send("Something went wrong.");
  }
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("token"); // ✅ Proper way to clear cookie
  res.redirect("/");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});