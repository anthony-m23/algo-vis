// generates the nodes based on how many user wants
function getNodes(number) {
    let nodes = [];
    for (let i = 0; i < number; i++) {
      nodes[i] = {
        id: i,
        label: "node " + i,
        group: "NULL"
      };
    }
    return nodes;
  }
  
  // randomly generates the edges/relationships between nodes
  function getEdges(nodes, number) {
    let edges = [];
    let rand;
    let max = Math.floor(number * 0.5) + number;
    let amountOfEdges = Math.floor(Math.random() * (max - number) + number);
    console.log(amountOfEdges);
    for (let i = 0; i < amountOfEdges; i++) {
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
    let rand = Math.floor(Math.random() * number);
    while (rand == i) rand = Math.floor(Math.random() * number);
    return rand;
  }

  function getDfs(nodes, edges) {
    let stack = [];
    let set = new Set();
    let dfs = [];
    let i = 0;
    stack.push(nodes[0].id);
    
    while(stack.length > 0){
      let curr = stack.pop();
      set.add(curr);

      dfs[i] = {
        id: curr
      };

      for(const edge of edges){
        if(edge.from == curr && !set.has(edge.to)){
          stack.push(edge.to);
          set.add(edge.to);
        }
      }
      i++; 
    }
    return dfs;
  }

  
  module.exports = {getNodes, getEdges, getRandom, getDfs};
  
