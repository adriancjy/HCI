function renderChart(alldata, beerData, wineData, spiritData, countryName, buttonClicked){
  var options = {
    chart: {
      height: 350,
      width: 700,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'All alcohol',
      type: 'column',
      data: [alldata[6], alldata[5], alldata[4], alldata[3], alldata[2], alldata[1], alldata[0]]
    }, 
    {
      name: 'Beer',
      type: 'column',
      data: [beerData[6], beerData[5], beerData[4], beerData[3], beerData[2], beerData[1], beerData[0]]
    }, 
    {
      name: 'Wine',
      type: 'column',
      data: [wineData[6], wineData[5], wineData[4], wineData[3], wineData[2], wineData[1], wineData[0]]
    },
    {
      name: 'Spirits',
      type: 'line',
      data: [spiritData[6], spiritData[5], spiritData[4], spiritData[3], spiritData[2], spiritData[1], spiritData[0]]
    }
    // {
    //   name: 'Revenue',
    //   type: 'line',
    //   data: [20, 29, 37, 36, 44, 45, 50, 58]
    // }
  ],
    stroke: {
      width: 6
    },
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
          color: '#008FFB'
        },
        labels: {
          style: {
            color: '#008FFB',
          }
        },
        title: {
          text: "Amount of alcohol consumed",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },

      {
        seriesName: 'Beer',
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
          text: "Amount of Beer consumption",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Wine',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019'
        },
        labels: {
          style: {
            color: '#FEB019',
          },
        },
        title: {
          text: "Amount of Wine consumption",
          style: {
            color: '#FEB019',
          }
        }
      },
      {
        seriesName: 'Spirits',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#E91E63'
        },
        labels: {
          style: {
            color: '#E91E63',
          },
        },
        title: {
          text: "Amount of Spirits consumption",
          style: {
            color: '#E91E63',
          }
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

  var options2 = {
    chart: {
        height: 350,
        width: 700,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var optSelected;
if(buttonClicked == 0){
optSelected = options;
} else if(buttonClicked == 1){
  optSelected = options2;
}





  var chart = new ApexCharts(
    document.querySelector("#chart"),
    optSelected
);



chart.render();

}

function test(){
  var options2 = {
    chart: {
        height: 350,
        width: 700,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
}
var chart = new ApexCharts(
  document.querySelector("#chart"),
  options2
);
chart.render();

}

