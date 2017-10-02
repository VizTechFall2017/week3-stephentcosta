var svg = d3.select('svg');

//Create SVG element

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#000");

//var dataset = d3.csv("./data.csv", function(data) {
  //  console.log(data);

d3.csv("./data.csv", function (error, circleData) {
  circleData.forEach(function (d) {
    d['cx'] = +d['x'];
    d['cy'] = +d['y'];
    d['r'] = +d['r'];
    //d['fill'] = +d['fill'];
    fill : d.fill;
  });
console.log(circleData);

svg.selectAll("circles")
.data(circleData)
.enter()
.append("circle")
.attr("cx", function (d) { return d.x; })
.attr("cy", function (d) { return d.y; })
.attr("r", function (d) { return d.r; })
.attr("fill", function (d) { return d.fill; })
});
