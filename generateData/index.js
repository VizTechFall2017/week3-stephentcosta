var svg = d3.select('svg');

/* Your code goes here */

var student = {"name": "stephen", "job": "designer", "age": 26};

var classroom = [
    {"name": "stephen", "job": "designer", "age": 26}
    {"name": "stephen", "job": "designer", "age": 26}
    {"name": "stephen", "job": "designer", "age": 26}
    {"name": "stephen", "job": "designer", "age": 26}
    {"name": "stephen", "job": "designer", "age": 26}
    {"name": "stephen", "job": "designer", "age": 26}]

//Circle thing with dimensions and stuff

svg.selectall('circle')
  .data(myArray)
  .enter()
  .append('circle')
      .attr('cx', function(d):{
          return: 'd.cx';})
      .attr('cy', function(d):{
          return: d.r;})
      .attr('fill', function(d):{
          return: d.color;})
