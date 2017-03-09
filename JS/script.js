var arr, input, txt;
var charCode=[];

var data = [];
var labels = [];

$(document).ready(function() {

  setData();
  extract();
  draw();

  $('#txt-box').keyup(function(){
    // resetCanvas();
    setData();
    extract();
    draw();
  });

});

function setData () {
  input = $('#txt-box')[0];
  txt = input.value;
  // eliminate spaces and transform to upper case
  arr = txt.toUpperCase().split(" ").join("").split("");
  // console.log(arr);
  arr.sort();
  data = [];
  labels=[];
}

function extract() {

  for (i=0; i<arr.length; i++) {
    if (labels.indexOf(arr[i])===-1) {
      labels.push(arr[i]);
      data.push(1);
    } else {
      data[labels.indexOf(arr[i])]++;
    }
  }
}

function draw() {
  $('#g1').remove(); // this is my <canvas> element
  $('#graph-container').append('<canvas  width="300" height="300" id="g1"><canvas>');
  var myChart = new Chart($("#g1"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: "Frequency",
        data: data,
        backgroundColor:'rgba(255, 206, 86, 0.3)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    },
    options: {
        title: {
          display: true,
          text: "Letter frequency",
          fontSize: 40
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
          display: false
        }
    }
  });
}

function resetCanvas() {

}
