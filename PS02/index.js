var svg = d3.select('svg');

//Create SVG element

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#000");

d3.csv("./data.csv", function (myArrayOfObjects){
        myArrayOfObjects.forEach(function (d){
          .append("circle")
          .attr("cx" "," d.x)
          .attr("cy" "," d.y)
          .attr("r" "," d.r)
          .attr("fill" "," d.fill)
        });
      });
