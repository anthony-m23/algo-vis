var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/json", function (req, res, next) {
  fs.readFile("public/json_test/test.json", (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    res.json(json);
  });
});

module.exports = router;
