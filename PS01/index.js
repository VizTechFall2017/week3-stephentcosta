var svg = d3.select('svg');

/* Your code goes here */

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#63b6ff");

array = [];

for (i=0; i < 50; i++)
    { var object = {cx: 800 * Math.random(),
                    cy: 800 * Math.random(),
                    r: 50 * Math.random()};

    array.push(object);
    svg.selectAll('circle')
        .data(array)
        .enter()
        .append('circle')
        .attr('cx', function (d)
            {console.log(d);
            return d.cx;})
        .attr('cy', function(d)
            {return d.cy;})
        .attr('r', function(d)
            {return d.r;})
        .attr('fill', '#b7d2ff')
        .attr('opacity', '0.5');}

    /*
        HOW DO I ADD ANOTHER SET OF SHAPES?!

        array.push(object);
        svg.selectAll('circle')
        .data(array)
        .enter()
        .append('rect')
        .attr('width', function (d)
            {console.log(d);
            return d.width;})
        .attr('height', function(d)
            {return d.height;})
        .attr('fill', '#ffcc00')
        .attr('opacity', '0.5');} */

console.log(array);
