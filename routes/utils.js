// generates the nodes based on how many user wants
function getNodes(number) {
    var nodes = [];
    for (var i = 0; i < number; i++) {
      nodes[i] = {
        id: i,
        label: "node " + i
      };
    }
    return nodes;
  }
  
  // randomly generates the edges/relationships between nodes
  function getEdges(nodes, number) {
    var edges = [];
    var rand;
    var max = Math.floor(number * 0.5) + number;
    let amountOfEdges = Math.floor(Math.random() * (max - number) + number);
    console.log(amountOfEdges);
    for (var i = 0; i < amountOfEdges; i++) {
      if (i < number-1) {
        rand = getRandom(number, i);
        edges[i] = { // make sure we do not have multiple separate graphs so connect all nodes initially
          from: i,
          to: i+1
        };
      }
      else{ // randomly generate edges between nodes without having node point to itself
        let from = Math.floor(Math.random() * number)
        let to = getRandom(number, from);
        edges[i] = {
          from: from,
          to: to
        };
      }
    }
  
    return edges;
  }
  
  // gets a random integer that is not equal to the current node (i) and between 0-number
  function getRandom(number, i) {
    var rand = Math.floor(Math.random() * number);
    while (rand == i) rand = Math.floor(Math.random() * number);
    return rand;
  }

  
  module.exports = {getNodes, getEdges, getRandom};