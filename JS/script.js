var arr, input, txt;
var charCode=[];

var data = [];
var labels = [];

$(document).ready(function() {

  setData();
  extract();
  draw();

  $('#txt-box').keyup(function(){
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
  var myChart = new Chart($("#g1"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Frequency",
        data: data,
        backgroundColor:'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
}
