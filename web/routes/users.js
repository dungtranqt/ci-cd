const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("api/v1/users", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
