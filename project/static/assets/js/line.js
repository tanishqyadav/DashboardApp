
// adding custom js... by tan
<<<<<<< HEAD
const fetchChartData = async() => {
  const response = await fetch(window.location + 'chart')
  const data = await response.json()
  console.log(data)
  return data
}

const fetchBarChartData = async() => {
  const response = await fetch(window.location + 'barchart')
=======
const fetchData = async() => {
  const response = await fetch(window.location + 'data')
>>>>>>> 80df4dd7 (first commit)
  const data = await response.json()
  console.log(data)
  return data
}


<<<<<<< HEAD
  let myChart,myChart2,myChart3,myChart4,myChart5,myChart6,myChart7,myChart8;
  const drawChart = async() => {
       const cdata = await fetchChartData()
       const {chartData,chartLabels} = cdata
       const {bchartData,bchartLabels} = await fetchBarChartData()
       myChart = new Chart("myChart", {
            type: "line",
            data: {
                 labels:bchartLabels,
                 datasets:[{
                      label:'obtained marks per email id yo',
                      data:bchartData,
                 }]
            },
            options: {}
            });

            myChart2 = new Chart("line-chart", {
              type: "line",
              data: {
                   labels:chartLabels,
                   datasets:[{
                        label:'obtained marks per email id',
                        data:chartData,
                   }]
              },
              options: {}
              });

              // myChart3 = new Chart("mycht", {
              //   type: "pie",
              //   data: {
              //        labels:chartLabels,
              //        datasets:[{
              //             label:'obtained marks per email id',
              //             data:chartData,
              //        }]
              //   },
              //   options: {}
              //   });

                myChart4 = new Chart("mybar", {
                  type: "bar",
                  data: {
                       labels:bchartLabels,
                       datasets:[{
                            label:'avg of obtained marks per email id',
                            data:bchartData,
                       }]
                  },
                  options: {}
                  });

                  myChart5 = new Chart("area-cht", {
                    type: "polarArea",
                    data: {
                         labels:chartLabels,
                         datasets:[{
                              label:'obtained marks per email id',
                              data:chartData,
                         }]
                    },
                    options: {}
                    });

                    myChart6 = new Chart("bubble", {
                      type: "bubble",
                      data: {
                           labels:chartLabels,
                           datasets:[{
                                label:'obtained marks per email id',
                                data:chartData,
                           }]
                      },
                      options: {}
                      });

                      myChart7 = new Chart("radar-chart", {
                        type: "radar",
                        data: {
                             labels:chartLabels,
                             datasets:[{
                                  label:'sum of obtained marks per email id',
                                  fill: true,
                                  // backgroundColor: "rgba(255,99,132,0.2)",
                                  // borderColor: "rgba(255,99,132,1)",
                                  pointBorderColor: "#fff",
                                  // pointBackgroundColor: "rgba(255,99,132,1)",
                                  pointBorderColor: "#fff",
                                  data:chartData,
                             }]
                        },
                        options: {}
                        });
  }
  
// drawChart()
console.log('chart')


  const updateChart = async() =>{
       if (myChart){
            myChart.destroy()
            
       }
       
       await drawChart()
  }

  // updateChart()

  var ws = new WebSocket(
    'ws://' 
    + window.location.host +
    "/ws/dashboard/"
    )
console.log(ws)

ws.onopen = function(){
    console.log('Websocket connection open...')
    ws.send(JSON.stringify({'msg':'hi, message from client..'}))
    updateChart()
    console.log('chart updated..')
}
ws.onmessage = function(event){
    console.log('EVENT..', event)
    console.log('Message recieved from server...',event.data)
    var data = JSON.parse(event.data)
    document.getElementById('yo').innerText = data
    updateChart()
    console.log('chart updated..')


}
ws.onerror = function(event){
    console.log('websocket error occured..',event)
}
ws.close = function(event){
    console.log('websocket connection closed...', event)
    updateChart()
    console.log('chart updated..')
}
=======
let myChart,myChart2,myChart3,myChart4,myChart5,myChart6,myChart7,myChart8;
const drawChart = async() => {
const {tipschartLabel, tipschartData,tipschartLabels,tsppchartLabel, tsppchartData,tsppchartLabels,tspichartLabel, tspichartData,tspichartLabels,bchartLabel, bchartData,bchartLabels} = await fetchData()
myChart = new Chart("myChart", {
     type: "line",
     data: {
          labels:tipschartLabels,
          datasets:[{
               label:'test..',
               data:tipschartData,
          }]
     },
     options: {}
     });

myChart2 = new Chart("line-chart", {
type: "line",
data: {
     labels:tspichartLabels,
     datasets:[{
          label:tspichartLabel,
          data:tspichartData,
     }]
},
options: {}
});


myChart3 = new Chart("mybar", {
type: "bar",
data: {
     labels:bchartLabels,
     datasets:[{
          label:bchartLabel,
          data:bchartData,
     }]
},
options: {}
});

myChart4 = new Chart("area-cht", {
type: "line",
data: {
     labels:tsppchartLabels,
     datasets:[{
          label:tsppchartLabel,
          data:tsppchartData,
     }]
},
options: {}
});

myChart6 = new Chart("bubble", {
     type: "pie",
     data: {
          labels:tipschartLabels,
          datasets:[{
               label:tipschartLabel,
               data:tipschartData,
          }]
     },
     options: {
     }
     });

myChart7 = new Chart("radar-chart", {
type: "radar",
data: {
     labels:tipschartLabels,
     datasets:[{
          label:tipschartLabel,
          fill: true,
          // backgroundColor: "rgba(255,99,132,0.2)",
          // borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          // pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data:tipschartData,
     }]
},
options: {}
});
  }
  
drawChart()
console.log('chart')


const updateChart = async() =>{
     if (myChart || myChart2){
          myChart.destroy(),
          myChart2.destroy()
          
     }
     
     await drawChart()
}

// updateChart()
>>>>>>> 80df4dd7 (first commit)


// line code

// new Chart(document.getElementById("line-chart"), {
//     type: 'line',
//     data: {
//       labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//       datasets: [{ 
//           data: [86,114,106,106,107,111,133,221,783,2478],
//           label: "india",
//           borderColor: "#3e95cd",
//           fill: false
//         }, { 
//           data: [282,350,411,502,635,809,947,1402,3700,5267],
//           label: "America",
//           borderColor: "#8e5ea2",
//           fill: false
//         }, { 
//           data: [168,170,178,190,203,276,408,547,675,734],
//           label: "Europe",
//           borderColor: "#3cba9f",
//           fill: false
//         }, { 
//           data: [40,20,10,16,24,38,74,167,508,784],
//           label: "Latin America",
//           borderColor: "#e8c3b9",
//           fill: false
//         }, { 
//           data: [6,3,2,2,7,26,82,172,312,433],
//           label: "North America",
//           borderColor: "#c45850",
//           fill: false
//         }
//       ]
//     },
//     options: {
//         responsive: true,
//       title: {
//         display: true,
//         text: 'World population per region (in millions)'
//       }
//     }
//   });

//   // pie


//   new Chart(document.getElementById('mycht'),{
//     type:'pie',
//     data:{
//         labels:['Assigned','NotAssigned','Ressigned'],
//         datasets:[{
//             data:[40,50,10],
//             borderWidth:2,
//             backgroundColor:['red','green','yellow'],
//         }]
//     },
//     options:{
//         scale:{
//             y:{
//                 beganAtZero:true
//             }
//         }
//     }
    
//     });


// // Bar chart
// new Chart(document.getElementById("mybar"), {
//   type: 'bar',
//   data: {
//     labels: ["delhi", "Noida", "Agra", "Bombay", "Banglore"],
//     datasets: [
//       {
//         label: "Population (millions)",
//         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//         data: [2478,5267,734,784,433]
//       }
//     ]
//   },
//   options: {
//     legend: { display: false },
//     title: {
//       display: true,
//       text: 'Predicted world population (millions) in 2050'
//     }
//   }
// });

// // area
// new Chart(document.getElementById('area-cht'),{
//   type:'polarArea',
//   data:{
//       labels:['india','usa','kanada','franch'],
//       datasets:[

//           {
//               label: 'poputation',
//               backgroundColor:['red','yellow',"green",'pink'],
//               data:[30,20,40,10]
//           }
//       ]
//   },
//   options:{
//       tittle:{
//           display:true,
//           text:'mayank raghav'
//       }
//   }

// });


// // bubble

// new Chart(document.getElementById("bubble"), {
//   type: 'bubble',
//   data: {
//     labels: "India",
//     datasets: [
//       {
//         label: ["Delhi"],
//         backgroundColor: "rgba(255,221,50,0.2)",
//         borderColor: "rgba(255,221,50,1)",
//         data: [{
//           x: 21269017,
//           y: 5.245,
//           r: 15
//         }]
//       }, {
//         label: ["Noida"],
//         backgroundColor: "rgba(60,186,159,0.2)",
//         borderColor: "rgba(60,186,159,1)",
//         data: [{
//           x: 258702,
//           y: 7.526,
//           r: 10
//         }]
//       }, {
//         label: ["Banglore"],
//         backgroundColor: "rgba(0,0,0,0.2)",
//         borderColor: "#000",
//         data: [{
//           x: 3979083,
//           y: 6.994,
//           r: 15
//         }]
//       }, {
//         label: ["Agra"],
//         backgroundColor: "rgba(193,46,12,0.2)",
//         borderColor: "rgba(193,46,12,1)",
//         data: [{
//           x: 4931877,
//           y: 5.921,
//           r: 15
//         }]
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Predicted world population (millions) in 2050'
//     }, scales: {
//       yAxes: [{ 
//         scaleLabel: {
//           display: true,
//           labelString: "Happiness"
//         }
//       }],
//       xAxes: [{ 
//         scaleLabel: {
//           display: true,
//           labelString: "GDP (PPP)"
//         }
//       }]
//     }
//   }
// });


// radar chart


// new Chart(document.getElementById("radar-chart"), {
//   type: 'radar',
//   data: {
//     labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//     datasets: [
//       {
//         label: "1950",
//         fill: true,
//         backgroundColor: "rgba(179,181,198,0.2)",
//         borderColor: "rgba(179,181,198,1)",
//         pointBorderColor: "#fff",
//         pointBackgroundColor: "rgba(179,181,198,1)",
//         data: [8.77,55.61,21.69,6.62,6.82]
//       }, {
//         label: "2050",
//         fill: true,
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         pointBorderColor: "#fff",
//         pointBackgroundColor: "rgba(255,99,132,1)",
//         pointBorderColor: "#fff",
//         data: [25.48,54.16,7.61,8.06,4.45]
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Distribution in % of world population'
//     }
//   }
// });


