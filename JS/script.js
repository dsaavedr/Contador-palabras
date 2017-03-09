$(document).ready(function () {
  p = theEndIsNear();

  var div = $("#time h1");

  div.html(p + "%");
  window.setInterval(function () {
    p = theEndIsNear();

    div.html(p + "%");
  },2000)
});

theEndIsNear = function () {
  var day_ms = 1000*60*60*24;
  var day_s = day_ms*1000;

  var start = new Date(1997,3,14);
  var now = new Date();
  var finish = start;

  // Días en una vida de 70 años

  var tot_d = 70*365.25;
  var tot_ms = tot_d*24*60*60*1000;
  var tot_s = tot_ms*1000;

  var vida = now.getTime() - start.getTime();
  var vida_s = vida * 1000;

  var p = (vida_s/tot_s)*100;

  return parseFloat(p.toFixed(10));
}
