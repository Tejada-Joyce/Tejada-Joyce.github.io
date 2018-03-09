var h = parseFloat(document.getElementById('high').textContent);
var l = parseFloat(document.getElementById('low').textContent);
var s = parseFloat(document.getElementById('speed').textContent);
var t = (h + l)/ 2;
var temperature = 35.74 + 0.6215*t - 35.75*Math.pow(s,0.16) + 0.4275*t*Math.pow(s,0.16) ;

document.getElementById("temperature").innerHTML = Math.round(temperature);