var chart;
//Blue, green, yellow, red
var colorList = ['#008FFB', '#FEB019', '#E91E63', '#00E396'];

//Alcohol chart
function renderAlcoholChart(alldata, beerData, wineData, spiritData, countryName){
  var alcoholOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.seriesIndex == 0 && config.dataPointIndex == 0){
            renderAlcoholPie(beerData[6], wineData[6], spiritData[6], alldata[6], countryName, 2010);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 1){
            renderAlcoholPie(beerData[5], wineData[5], spiritData[5], alldata[5], countryName, 2011);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 2){
            renderAlcoholPie(beerData[4], wineData[4], spiritData[4], alldata[4], countryName, 2012);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 3){
            renderAlcoholPie(beerData[3], wineData[3], spiritData[3], alldata[3], countryName, 2013);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 4){
            renderAlcoholPie(beerData[2], wineData[2], spiritData[2], alldata[2], countryName, 2014);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 5){
            renderAlcoholPie(beerData[1], wineData[1], spiritData[1], alldata[1], countryName, 2015);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 6){
            renderAlcoholPie(beerData[0], wineData[0], spiritData[0], alldata[0], countryName, 2016);
          }          
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'All alcohol',
      type: 'column',
      data: [alldata[6], alldata[5], alldata[4], alldata[3], alldata[2], alldata[1], alldata[0]]
    }
  ],
    title: {
      text: 'Types of alcohol consumed in ' + countryName,
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colorList[0]
        },
        labels: {
          style: {
            color: colorList[0],
          }
        },
        title: {
          text: "Amount of alcohol consumed",
          style: {
            color: colorList[0],
          }
        },
        tooltip: {
          enabled: true
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    alcoholOption
);
chart.render();
}


//Obesity chart
function renderObesityChart(alldata, maleData, femaleData, countryName){
  var obesityOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.seriesIndex == 0 && config.dataPointIndex == 0){
            renderObesityPie(maleData[6], femaleData[6], alldata[6], countryName, 2010);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 1){
            renderObesityPie(maleData[5], femaleData[5], alldata[6], countryName, 2011);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 2){
            renderObesityPie(maleData[4], femaleData[4], alldata[6], countryName, 2012);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 3){
            renderObesityPie(maleData[3], femaleData[3], alldata[6], countryName, 2013);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 4){
            renderObesityPie(maleData[2], femaleData[2], alldata[6], countryName, 2014);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 5){
            renderObesityPie(maleData[1], femaleData[1], alldata[6], countryName, 2015);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 6){
            renderObesityPie(maleData[0], femaleData[0], alldata[6], countryName, 2016);
          }          
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Obesity among all genders',
      type: 'column',
      data: [alldata[6], alldata[5], alldata[4], alldata[3], alldata[2], alldata[1], alldata[0]]
    }
  ],
    stroke: {
      width: 6
    },
    title: {
      text: 'Prevalence of obesity among adults with BMI ≥ 30 for ' + countryName,
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Prevalence of obesity among all genders",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    obesityOption
);



chart.render();

}

function renderInsufficientChart(alldata, maleData, femaleData, countryName){
  var insufOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.seriesIndex == 0 && config.dataPointIndex == 0){
            renderInsufPie(maleData[6], femaleData[6], alldata[6], countryName, 2010);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 1){
            renderInsufPie(maleData[5], femaleData[5], alldata[6], countryName, 2011);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 2){
            renderInsufPie(maleData[4], femaleData[4], alldata[6], countryName, 2012);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 3){
            renderInsufPie(maleData[3], femaleData[3], alldata[6], countryName, 2013);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 4){
            renderInsufPie(maleData[2], femaleData[2], alldata[6], countryName, 2014);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 5){
            renderInsufPie(maleData[1], femaleData[1], alldata[6], countryName, 2015);
          }else if(config.seriesIndex == 0 && config.dataPointIndex == 6){
            renderInsufPie(maleData[0], femaleData[0], alldata[6], countryName, 2016);
          }          
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Insufficient physical activity among all genders',
      type: 'column',
      data: [alldata[6], alldata[5], alldata[4], alldata[3], alldata[2], alldata[1], alldata[0]]
    }
  ],
    stroke: {
      width: 6
    },
    title: {
      text: 'Prevalence of Insufficient physical activity among adolescents for ' + countryName,
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Prevalence of Insufficient physical activity among all genders",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },

      
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    insufOption
);



chart.render();

}

//ALcohol pie chart
function renderAlcoholPie(beer, wine, spirit, alldata, countryName, year){
  d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
  chartT.html("<div id='chart'></div>");
        chartT
      .style("display", "block")
      .style("opacity", 1)
  // var beerVal = (beer/alldata * 100);
  // var wineVal = (wine/alldata * 100);
  // var spiritVal = (spirit/alldata * 100);


  var alcoholOption2 ={
    colors: ['#FEB019', '#D7263D', '#03a9f4'],
    chart: {
    height: 350,
    width: 700,
      type: 'pie',
  },
  title: {
    text: "Consumption of types of alcohol in " + countryName  + " in year " + year,
  },
  labels: ['Beer', 'Wine', 'Spirits'],
  series: [Math.ceil(beer), Math.ceil(wine), Math.ceil(spirit)],
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200
          },
          legend: {
              position: 'bottom'
          }
      }
  }]
  
}
chart = new ApexCharts(
  document.querySelector("#chart"),
  alcoholOption2
);
chart.render();
}

//Obesity pie chart
function renderObesityPie(male, female, alldata, countryName, year){
  d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
  chartT.html("<div id='chart'></div>");
        chartT
      .style("display", "block")
      .style("opacity", 1)
  // var maleVal = (male/alldata * 100);
  // var femaleVal = (female/alldata * 100);

  var obesityOption2 ={
    colors: ['#1A73E8', '#d4526e'],
    chart: {
      height: 350,
    width: 700,
      type: 'pie',
  },
  
  title: {
    text: "Prevalence of obesity among male and female in " + countryName  + " in year " + year,
  },
  labels: ['Obesity(Male)', 'Obesity(Female)'],
  series: [Math.ceil(male), Math.ceil(female)],
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200
          },
          legend: {
              position: 'bottom'
          }
      }
  }]
}
chart = new ApexCharts(
  document.querySelector("#chart"),
  obesityOption2
);
chart.render();
}

//Obesity insufficient activity chart
function renderInsufPie(male, female, alldata, countryName, year){
  d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
  chartT.html("<div id='chart'></div>");
        chartT
      .style("display", "block")
      .style("opacity", 1)
  // var maleVal = (male/alldata * 100);
  // var femaleVal = (female/alldata * 100);

  var insufOption2 ={
    colors: ['#1A73E8', '#d4526e'],
    chart: {
      height: 350,
    width: 700,
      type: 'pie',
  },
  title: {
    text: "Prevalence of insufficient activity among male and female in " + countryName  + " in year " + year,
  },
  labels: ['Insufficient Activity(Male)', 'Insufficient Activity(Female)'],
  series: [Math.ceil(male), Math.ceil(female)],
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200
          },
          legend: {
              position: 'bottom'
          }
      }
  }]
}
chart = new ApexCharts(
  document.querySelector("#chart"),
  insufOption2
);
chart.render();
}

function renderAlcoholThree(onealldata, twoalldata, threealldata, countryName, beer, wine, spirit){
  var alcoholOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderAlcoholThreeStack(beer, wine, spirit, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    },
    {
      name: countryName[2],
      type: 'column',
      data: [threealldata[6], threealldata[5], threealldata[4], threealldata[3], threealldata[2], threealldata[1], threealldata[0]]
    }
  ],
    title: {
      text: 'Comparing amount of alcohol consumed in ' + countryName[0] + ", " + countryName[1] + " and " + countryName[2],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colorList[0]
        },
        labels: {
          style: {
            color: colorList[0],
          }
        },
        title: {
          text: "Amount of alcohol consumed in " + countryName[0],
          style: {
            color: colorList[0],
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Amount of alcohol consumed in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: countryName[2],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Amount of alcohol consumed in " + countryName[2],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    alcoholOption
);
chart.render();
}


function renderAlcoholTwo(onealldata, twoalldata, countryName, beer, wine, spirit){
  var alcoholOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderAlcoholStack(beer, wine, spirit, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderAlcoholStack(beer, wine, spirit, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderAlcoholStack(beer, wine, spirit, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderAlcoholStack(beer, wine, spirit, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderAlcoholStack(beer, wine, spirit, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderAlcoholStack(beer, wine, spirit, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderAlcoholStack(beer, wine, spirit, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    }
  ],
    title: {
      text: 'Comparing amount of alcohol consumed in ' + countryName[0] + " and " + countryName[1],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colorList[0]
        },
        labels: {
          style: {
            color: colorList[0],
          }
        },
        title: {
          text: "Amount of alcohol consumed in " + countryName[0],
          style: {
            color: colorList[0],
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Amount of alcohol consumed in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    alcoholOption
);
chart.render();
}


function renderObesityTwo(onealldata, twoalldata, countryName, male, female){
  var obesityOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderObesityStack(male, female, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderObesityStack(male, female, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderObesityStack(male, female, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderObesityStack(male, female, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderObesityStack(male, female, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderObesityStack(male, female, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderObesityStack(male, female, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    }
  ],
    stroke: {
      width: 6
    },
    title: {
      text: 'Obesity among all genders in ' + countryName[0] + " and " + countryName[1],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Prevalence of obesity among all genders in " + countryName[0],
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of obesity among all genders in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    obesityOption
);



chart.render();

}


function renderObesityThree(onealldata, twoalldata, threealldata, countryName, male, female){
  var alcoholOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderObesityThreeStack(male, female, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderObesityThreeStack(male, female, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderObesityThreeStack(male, female, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderObesityThreeStack(male, female, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderObesityThreeStack(male, female, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderObesityThreeStack(male, female, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderObesityThreeStack(male, female, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    },
    {
      name: countryName[2],
      type: 'column',
      data: [threealldata[6], threealldata[5], threealldata[4], threealldata[3], threealldata[2], threealldata[1], threealldata[0]]
    }
  ],
    title: {
      text: 'Comparing obesity in ' + countryName[0] + ", " + countryName[1] + " and " + countryName[2],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colorList[0]
        },
        labels: {
          style: {
            color: colorList[0],
          }
        },
        title: {
          text: "Prevalence of obesity in " + countryName[0],
          style: {
            color: colorList[0],
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of obesity in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: countryName[2],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of obesity in " + countryName[2],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    alcoholOption
);
chart.render();
}

function renderInsufTwo(onealldata, twoalldata, countryName, male, female){
  var obesityOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderInsufStack(male, female, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderInsufStack(male, female, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderInsufStack(male, female, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderInsufStack(male, female, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderInsufStack(male, female, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderInsufStack(male, female, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderInsufStack(male, female, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    }
  ],
    stroke: {
      width: 6
    },
    title: {
      text: 'Comparing insufficient activities among people in ' + countryName[0] + " and " + countryName[1],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Prevalence of insufficient activity among people in " + countryName[0],
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of insufficient activity among people in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    obesityOption
);



chart.render();

}


function renderInsufThree(onealldata, twoalldata, threealldata, countryName, male, female){
  var alcoholOption = {
    chart: {
      events: {
        dataPointSelection: function(event, chartContext, config) {
          if(config.dataPointIndex == 0){
            renderInsufThreeStack(male, female, countryName, 2010, 6);
          }else if(config.dataPointIndex == 1){
            renderInsufThreeStack(male, female, countryName, 2011, 5);
          }else if(config.dataPointIndex == 2){
            renderInsufThreeStack(male, female, countryName, 2012, 4);
          }else if(config.dataPointIndex == 3){
            renderInsufThreeStack(male, female, countryName, 2013, 3);
          }else if(config.dataPointIndex == 4){
            renderInsufThreeStack(male, female, countryName, 2014, 2);
          }else if(config.dataPointIndex == 5){
            renderInsufThreeStack(male, female, countryName, 2015, 1);
          }else if(config.dataPointIndex == 6){
            renderInsufThreeStack(male, female, countryName, 2016, 0);
          }
        }
      },
      height: 350,
      width: 700,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: countryName[0],
      type: 'column',
      data: [onealldata[6], onealldata[5], onealldata[4], onealldata[3], onealldata[2], onealldata[1], onealldata[0]]
    },
    {
      name: countryName[1],
      type: 'column',
      data: [twoalldata[6], twoalldata[5], twoalldata[4], twoalldata[3], twoalldata[2], twoalldata[1], twoalldata[0]]
    },
    {
      name: countryName[2],
      type: 'column',
      data: [threealldata[6], threealldata[5], threealldata[4], threealldata[3], threealldata[2], threealldata[1], threealldata[0]]
    }
  ],
    title: {
      text: 'Comparing insufficient activity among people in ' + countryName[0] + ", " + countryName[1] + " and " + countryName[2],
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: colorList[0]
        },
        labels: {
          style: {
            color: colorList[0],
          }
        },
        title: {
          text: "Prevalence of insufficient activity among people in " + countryName[0],
          style: {
            color: colorList[0],
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: countryName[1],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of insufficient activity among people in " + countryName[1],
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: countryName[2],
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            color: '#00E396',
          }
        },
        title: {
          text: "Prevalence of insufficient activity among people in " + countryName[2],
          style: {
            color: '#00E396',
          }
        },
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };


    chart = new ApexCharts(
    document.querySelector("#chart"),
    alcoholOption
);
chart.render();
}


function renderAlcoholStack(firstData, secondData, thirdData, countryName, year, id){
  d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
  chartT.html("<div id='chart'></div>");
        chartT
      .style("display", "block")
      .style("opacity", 1)
  // var beerVal = (beer/alldata * 100);
  // var wineVal = (wine/alldata * 100);
  // var spiritVal = (spirit/alldata * 100);


  var alcoholTwoStack = {
    colors: ['#FEB019', '#D7263D', '#03a9f4'],
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
        
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Beer',
        data: [firstData[0][id], firstData[1][id]]
    },{
        name: 'Wine',
        data: [secondData[0][id], secondData[1][id]]
    },{
        name: 'Spirits',
        data: [thirdData[0][id], thirdData[1][id]]
    }],
    title: {
        text: 'Types of alcohol drank in ' + countryName[0] + " and " + countryName[1] + " in year " + year
    },
    xaxis: {
        categories: [countryName[0], countryName[1]],
        labels: {
            formatter: function(val) {
                return val
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
        
    },
    tooltip: {
        y: {
            formatter: function(val) {
            return val
        }
        }
    },
    fill: {
        opacity: 1
        
    },
    
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
}
chart = new ApexCharts(
  document.querySelector("#chart"),
  alcoholTwoStack
);
chart.render();
}

function renderAlcoholThreeStack(firstData, secondData, thirdData, countryName, year, id){
  d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
  chartT.html("<div id='chart'></div>");
        chartT
      .style("display", "block")
      .style("opacity", 1)
  // var beerVal = (beer/alldata * 100);
  // var wineVal = (wine/alldata * 100);
  // var spiritVal = (spirit/alldata * 100);


  var alcoholThreeStack = {
    colors: ['#FEB019', '#D7263D', '#03a9f4'],
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
        
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Beer',
        data: [firstData[0][id], firstData[1][id], firstData[2][id]]
    },{
        name: 'Wine',
        data: [secondData[0][id], secondData[1][id], secondData[2][id]]
    },{
        name: 'Spirits',
        data: [thirdData[0][id], thirdData[1][id], thirdData[2][id]]
    }],
    title: {
        text: 'Types of alcohol drank in ' + countryName[0] + ", " + countryName[1] + " and " + countryName[2] + " in year " + year
    },
    xaxis: {
        categories: [countryName[0], countryName[1], countryName[2]],
        labels: {
            formatter: function(val) {
                return val
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
        
    },
    tooltip: {
        y: {
            formatter: function(val) {
            return val
        }
        }
    },
    fill: {
        opacity: 1
        
    },
    
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
  }
  chart = new ApexCharts(
  document.querySelector("#chart"),
  alcoholThreeStack
  );
  chart.render();
  }



  function renderObesityStack(firstData, secondData, countryName, year, id){
    d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
    chartT.html("<div id='chart'></div>");
          chartT
        .style("display", "block")
        .style("opacity", 1)
    // var beerVal = (beer/alldata * 100);
    // var wineVal = (wine/alldata * 100);
    // var spiritVal = (spirit/alldata * 100);
  
  
    var obesityTwoStack = {
      colors: ['#1A73E8', '#d4526e'],
      chart: {
          height: 350,
          type: 'bar',
          stacked: true,
      },
      plotOptions: {
          bar: {
              horizontal: true,
          },
          
      },
      stroke: {
          width: 1,
          colors: ['#fff']
      },
      series: [{
          name: 'Male',
          data: [firstData[0][id], firstData[1][id]]
      },{
          name: 'Female',
          data: [secondData[0][id], secondData[1][id]]
      }],
      title: {
          text: 'Obesity among genders in ' + countryName[0] + " and " + countryName[1] + " in year " + year
      },
      xaxis: {
          categories: [countryName[0], countryName[1]],
          labels: {
              formatter: function(val) {
                  return val
              }
          }
      },
      yaxis: {
          title: {
              text: undefined
          },
          
      },
      tooltip: {
          y: {
              formatter: function(val) {
              return val
          }
          }
      },
      fill: {
          opacity: 1
          
      },
      
      legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
      }
  }
  chart = new ApexCharts(
    document.querySelector("#chart"),
    obesityTwoStack
  );
  chart.render();
  }
  
  function renderObesityThreeStack(firstData, secondData, countryName, year, id){
    d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
    chartT.html("<div id='chart'></div>");
          chartT
        .style("display", "block")
        .style("opacity", 1)
    // var beerVal = (beer/alldata * 100);
    // var wineVal = (wine/alldata * 100);
    // var spiritVal = (spirit/alldata * 100);
  
  
    var obesityThreeStack = {
      colors: ['#1A73E8', '#d4526e'],
      chart: {
          height: 350,
          type: 'bar',
          stacked: true,
      },
      plotOptions: {
          bar: {
              horizontal: true,
          },
          
      },
      stroke: {
          width: 1,
          colors: ['#fff']
      },
      series: [{
          name: 'Male',
          data: [firstData[0][id], firstData[1][id], firstData[2][id]]
      },{
          name: 'Female',
          data: [secondData[0][id], secondData[1][id], secondData[2][id]]
      }],
      title: {
          text: 'Obesity among genders in ' + countryName[0] + ", " + countryName[1] +  " and " + countryName[2] + " in year " + year
      },
      xaxis: {
          categories: [countryName[0], countryName[1], countryName[2]],
          labels: {
              formatter: function(val) {
                  return val
              }
          }
      },
      yaxis: {
          title: {
              text: undefined
          },
          
      },
      tooltip: {
          y: {
              formatter: function(val) {
              return val
          }
          }
      },
      fill: {
          opacity: 1
          
      },
      
      legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
      }
    }
    chart = new ApexCharts(
    document.querySelector("#chart"),
    obesityThreeStack
    );
    chart.render();
    }


    function renderInsufStack(firstData, secondData, countryName, year, id){
      d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
      chartT.html("<div id='chart'></div>");
            chartT
          .style("display", "block")
          .style("opacity", 1)
      // var beerVal = (beer/alldata * 100);
      // var wineVal = (wine/alldata * 100);
      // var spiritVal = (spirit/alldata * 100);
    
    
      var insufTwoStack = {
        colors: ['#1A73E8', '#d4526e'],
        chart: {
            height: 350,
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
            
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        series: [{
            name: 'Male',
            data: [firstData[0][id], firstData[1][id]]
        },{
            name: 'Female',
            data: [secondData[0][id], secondData[1][id]]
        }],
        title: {
            text: 'Prevalence of insufficient activity among genders in ' + countryName[0] + " and " + countryName[1] + " in year " + year
        },
        xaxis: {
            categories: [countryName[0], countryName[1]],
            labels: {
                formatter: function(val) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
            
        },
        tooltip: {
            y: {
                formatter: function(val) {
                return val
            }
            }
        },
        fill: {
            opacity: 1
            
        },
        
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    }
    chart = new ApexCharts(
      document.querySelector("#chart"),
      insufTwoStack
    );
    chart.render();
    }
    
    function renderInsufThreeStack(firstData, secondData, countryName, year, id){
      d3.select(".chartT").select("#chart").transition().duration(1000).style("opacity", "0").remove();
      chartT.html("<div id='chart'></div>");
            chartT
          .style("display", "block")
          .style("opacity", 1)
      // var beerVal = (beer/alldata * 100);
      // var wineVal = (wine/alldata * 100);
      // var spiritVal = (spirit/alldata * 100);
    
    
      var insufThreeStack = {
        colors: ['#1A73E8', '#d4526e'],
        chart: {
            height: 350,
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
            
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        series: [{
            name: 'Male',
            data: [firstData[0][id], firstData[1][id], firstData[2][id]]
        },{
            name: 'Female',
            data: [secondData[0][id], secondData[1][id], secondData[2][id]]
        }],
        title: {
          text: 'Prevalence of insufficient activity among genders in ' + countryName[0] + ", " + countryName[1] +  " and " + countryName[2] + " in year " + year
        },
        xaxis: {
            categories: [countryName[0], countryName[1], countryName[2]],
            labels: {
                formatter: function(val) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
            
        },
        tooltip: {
            y: {
                formatter: function(val) {
                return val
            }
            }
        },
        fill: {
            opacity: 1
            
        },
        
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
      }
      chart = new ApexCharts(
      document.querySelector("#chart"),
      insufThreeStack
      );
      chart.render();
      }
  
  
