var express = require("express");
var router = express.Router();
const fs = require("fs");
const utils = require("./utils");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// api to get the initial graph json
router.get("/json", function (req, res, next) {
  var number = parseInt(req.query.number);
  var nodes = utils.getNodes(number);
  var edges = utils.getEdges(nodes, number);
  var graph = {
    nodes: nodes,
    edges: edges
  };
  res.json(graph);
});

// graph view page
router.get("/graph", function (req, res, next) {
  res.render("graph");
});

module.exports = router;
