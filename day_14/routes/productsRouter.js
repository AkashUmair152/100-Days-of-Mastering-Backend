const express = require("express");
const router = express.Router();


router.get("/", function(req,res){
    res.send("heyy Products How you Doing????");
})

module.exports = router;