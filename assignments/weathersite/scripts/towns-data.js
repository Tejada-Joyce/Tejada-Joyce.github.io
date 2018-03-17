var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL, true);
request.send();
request.onload = function() {
    var weatherInfo = JSON.parse(request.responseText);
    console.log(weatherInfo)

    //Franklin
    document.getElementById('name1').innerHTML = weatherInfo.towns["0"].name;
    document.getElementById('motto1').innerHTML = weatherInfo.towns["0"].motto;
    document.getElementById('year1').innerHTML = weatherInfo.towns["0"].yearFounded;
    document.getElementById('pop1').innerHTML = weatherInfo.towns["0"].currentPopulation;
    document.getElementById('rainfall1').innerHTML = weatherInfo.towns["0"].averageRainfall;
    
    //Greenville
    document.getElementById('name2').innerHTML = weatherInfo.towns["1"].name;
    document.getElementById('motto2').innerHTML = weatherInfo.towns["1"].motto;
    document.getElementById('year2').innerHTML = weatherInfo.towns["1"].yearFounded;
    document.getElementById('pop2').innerHTML = weatherInfo.towns["1"].currentPopulation;
    document.getElementById('rainfall2').innerHTML = weatherInfo.towns["1"].averageRainfall;
    
    //Springfield
    document.getElementById('name3').innerHTML = weatherInfo.towns["3"].name;
    document.getElementById('motto3').innerHTML = weatherInfo.towns["3"].motto;
    document.getElementById('year3').innerHTML = weatherInfo.towns["3"].yearFounded;
    document.getElementById('pop3').innerHTML = weatherInfo.towns["3"].currentPopulation;
    document.getElementById('rainfall3').innerHTML = weatherInfo.towns["3"].averageRainfall;
    
}