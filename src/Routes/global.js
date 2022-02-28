const express = require("express");
const router = express.Router();

const globalControllers = {
  healthyCheck(req, res) {
    res.send("<h2>API is running</h2>");
  },
};
module.exports = globalControllers;

// routes paths and methods
router.get("/api", (req, res) => {
  res.send("API online");
});
module.exports = router;
