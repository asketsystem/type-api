const express = require("express");
const router = express.Router();

// your routes paths and methods
router.get("/api", (req, res) => {
  res.send("API online");
});
module.exports = router;
