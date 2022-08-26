$.get("/json", function (data) {
  console.log(data.nodes);
  graph = {
    nodes: data.nodes,
    edges: data.edges,
  };
  var container = document.getElementById("my_network");
  var options = {};
  var network = new vis.Network(container, data, options);
});
