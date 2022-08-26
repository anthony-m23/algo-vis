function getGraph(number) {
  $.get("/json?number=" + number, function (data) {
    console.log(data.nodes);
    graph = {
      nodes: data.nodes,
      edges: data.edges,
    };
    var container = document.getElementById("my_network");
    var options = {
      configure:{
        enabled: false
      }
    };
    var network = new vis.Network(container, data, options);
  });
}

function getUrlParameter() {
  var number = document.getElementById("number").value;
  if (Number.isInteger(parseInt(number))) {
    window.location.href = "/graph?number=" + number;
  } else {
    alert("Must enter a number");
  }
}
