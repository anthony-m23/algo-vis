var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) { 
  res.render("index", { title: "Express" });
});

// api to get the initial graph json
router.get("/json", function (req, res, next) {
  var number = req.query.number;
  var nodes = getNodes(number);
  var edges = getEdges(nodes, number);
  var graph = {
    nodes: nodes,
    edges: edges
  };
  console.log(graph);
  res.json(graph);
});

// graph view page
router.get("/graph", function (req, res, next) {
  res.render("graph");
});

module.exports = router;





// -------------------------------------- UTILS -----------------------------------------------------------------------------


// generates the nodes based on how many user wants
function getNodes(number){
  var nodes = [];
  for(var i = 0; i < number; i++){
      nodes[i] = {
          id: i,
          label: "node " + i
      };
  }
  return nodes;
}

// randomly generates the edges/relationships between nodes
function getEdges(nodes, number){
  var edges = [];
  for(var i = 0; i < number; i++){
    var rand = getRandom(number, i);
    edges[i] = {
      from: i,
      to: rand
    };
  }
  return edges;
}

// gets a random integer that is not equal to the current node (i)
function getRandom(number, i){
  var rand = Math.floor(Math.random() * number);
  while(rand == i) rand = Math.floor(Math.random() * number);
  return rand;
}