function renderAlcoholChart(alldata, beerData, wineData, spiritData, countryName){
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


  var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);



chart.render();

}

function renderObesityChart(alldata, maleData, femaleData, countryName){
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
      name: 'Obesity among all genders',
      type: 'column',
      data: [alldata[6], alldata[5], alldata[4], alldata[3], alldata[2], alldata[1], alldata[0]]
    }, 
    {
      name: 'Obesity in Males',
      type: 'column',
      data: [maleData[6], maleData[5], maleData[4], maleData[3], maleData[2], maleData[1], maleData[0]]
    }, 
    {
      name: 'Obesity in Females',
      type: 'column',
      data: [femaleData[6], femaleData[5], femaleData[4], femaleData[3], femaleData[2], femaleData[1], femaleData[0]]
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
      },

      {
        seriesName: 'Obesity in Males',
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
          text: "Prevalence of obesity among Males",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Obesity in Females',
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
          text: "Prevalence of obesity among Females",
          style: {
            color: '#FEB019',
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


  var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);



chart.render();

}






