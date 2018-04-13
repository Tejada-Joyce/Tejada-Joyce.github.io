var requestURL = 'https://tejada-joyce.github.io/assignments/the%20mountain%20spoke/data/service.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL, true);
request.send();
request.onload = function() {
    var tableInfo = JSON.parse(request.responseText);
    var i, x = " ";
    for (i in tableInfo.definition["1"].long) {
    x += tableInfo.definition["1"].long[i] + "<br>";
    };
    console.log(tableInfo)

    //Header
    document.getElementById('header1').innerHTML = tableInfo.headers["0"];
    document.getElementById('header2').innerHTML = tableInfo.headers["1"];
    document.getElementById('header3').innerHTML = tableInfo.headers["2"];
   
    //Row1
    document.getElementById('service1').innerHTML = tableInfo.service["0"];
    document.getElementById('def1').innerHTML = tableInfo.definition["0"];
    document.getElementById('price1').innerHTML = tableInfo.price["0"];
    
    //Row2
    document.getElementById('service2').innerHTML = tableInfo.service["1"];
    document.getElementById('def2').innerHTML = x;
    document.getElementById('price2').innerHTML = tableInfo.price["1"];
    
    //Row3
    document.getElementById('service3').innerHTML = tableInfo.service["2"];
    document.getElementById('def3').innerHTML = tableInfo.definition["2"];
    document.getElementById('price3').innerHTML = tableInfo.price["2"];
    
    //Row4
    document.getElementById('service4').innerHTML = tableInfo.service["3"];
    document.getElementById('def4').innerHTML = tableInfo.definition["3"];
    document.getElementById('price4').innerHTML = tableInfo.price["3"];
    
}