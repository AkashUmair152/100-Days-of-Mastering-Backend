// routes/owners.js

const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners");
const bcrypt = require("bcrypt"); // 👉 Add this for password hashing

router.post("/create", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // ✅ Input validation
    if (!fullName || !email || !password) {
      console.log("Owner creation failed: Missing required fields");
      return res.status(400).send("All fields (fullName, email, password) are required.");
    }

    // 🔒 Hash password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if an owner already exists
    const owners = await ownerModel.find();
    if (owners.length > 0) {
     console.log("Access denied: Attempt to create second owner");
      return res.status(403).send("Only one owner is allowed. No permission to create another.");
    }

    // Create new owner
    const createdOwner = await ownerModel.create({
      fullName,
      email,
      password: hashedPassword, // 👈 Save hashed password
    });

    console.log("✅ Owner created successfully:", { id: createdOwner._id, email });

    res.status(201).json({
      message: "Owner created successfully",
      owner: {
        _id: createdOwner._id,
        fullName: createdOwner.fullName,
        email: createdOwner.email,
      },
    });
  } catch (error) {
    console.log("❌ Error creating owner:", error.message);
    res.status(500).send("Internal server error");
  }
});

// GET /owners - Health check or info
router.get("/", (req, res) => {
  console.log("GET /owners - Info route accessed");
  res.send("Heyy Owners! How you doing???? 👋");
});

module.exports = router;