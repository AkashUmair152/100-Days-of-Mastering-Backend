const express = require('express');
const router = express.Router(); // ← This line was missing or incorrect

// Define your route
router.get("/", function (req, res) {
  res.send("User route is working!");
});

// Export the router
module.exports = router;