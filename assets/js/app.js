

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("data.csv").then(function(usData) {
    console.log(usData[1]);

    // Format the data
    usData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.povertyMoe = +data.povertyMoe;
        data.age = +data.age;
        data.ageMoe = +data.ageMoe;
        data.income = +data.income;
        data.incomeMoe = +data.incomeMoe;
        data.healthcare = +data.healthcare;
        data.healthcareLow = +data.healthcareLow;
        data.healthcareHigh = +data.healthcareHigh;
        data.obesity = +data.obesity;
        data.obesityLow = +data.obesityLow;
        data.obesityHigh = +data.obesityHigh;
        data.smokes = +data.smokes;
        data.smokesLow = +data.smokesLow;
        data.smokesHigh = +data.smokesHigh;
        // console.log(data.abbr)
        
  });
  console.log(usData[1]);

  

//  Create Scales
  var xScale = d3.scaleLinear()
    .domain(d3.extent(usData, d => d.income))
    .range([0, width]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(usData, d => d.healthcare)])
    .range([height, 0]);

//   Create Axes
  var bottomAxis = d3.axisBottom(xScale);
  var leftAxis = d3.axisLeft(yScale);
 

//   Append the axes to the chartGroup
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

// //   // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .call(leftAxis);

//   // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .attr("transform", `translate(${width}, 0)`);
//     .attr("stroke", "orange") 
  


    chartGroup.append('g')
        .selectAll("dot")
        .data(usData)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.income); } )
        .attr("cy", function (d) { return yScale(d.healthcare); } )
        .attr("r", 10.0)
        .style("fill", "#69b3a2");
    

    chartGroup.append('g')
        .selectAll('dot')
        .data(usData)
        .enter()
        .append("text")
        .classed("circle-text", true)
        .attr("x", function (d) {return xScale(d.income) - 5  ;} )
        .attr("y", function (d) {return yScale(d.healthcare) + 4; })
        .style("fill", "black")
        .text(function(d) {return (d.abbr);});
    

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 10)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Income");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Healthcare");
      
});



   