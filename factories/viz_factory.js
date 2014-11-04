(function() {
  // Chart interface specficication
  window.sparkline = d3.charts.sparkline()
      .height(40)
      .width(100)
      .xAxis('sales')
      .yAxis('profit')
      .color('steelblue');


  // helper functions for generating random data
  var rand = function() {return Math.floor((Math.random() * 10) + 1)};
  var data = function(i) {
    return _.map(_.range(9), function(d) {
      return {sales: d, profit: rand()};
    })
  };

  // Assign the chart
  var charts = function() {
    var i = rand();
    var datum = _.map(_.range(4), function(d) { return data(); })

    d3.select("#chart1").datum(datum[0]).call(sparkline.draw);
    d3.select("#chart2").datum(datum[1]).call(sparkline.draw);
    d3.select("#chart3").datum(datum[2]).call(sparkline.draw);
    d3.select("#chart4").datum(datum[3]).call(sparkline.draw);
  }

  charts();

  window.data1=[
  {sales: 1, profit: 12},
  {sales: 2, profit: 13},
  {sales: 3, profit: 15},
  {sales: 4, profit: 16}
];

window.data2=[
  {sales: 1, profit: 16},
  {sales: 2, profit: 15},
  {sales: 3, profit: 14},
  {sales: 4, profit: 13}
];

  // var id = setInterval(function() {
  //   charts();
  // }, 2000);

  // setTimeout(function() {
  //   clearInterval(id);
  // }, 60000);
})()