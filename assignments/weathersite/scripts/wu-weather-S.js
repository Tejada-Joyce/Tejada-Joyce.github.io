var weatherObj = new XMLHttpRequest();

weatherObj.open('GET', 'http://api.wunderground.com/api/c42874163b0f6ad9/conditions/forecast/q/MA/Springfield.json', true);

weatherObj.send();

weatherObj.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObj.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('high').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('c-temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('wind-chill').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('img-current').src = weatherInfo.current_observation.icon_url;
    document.getElementById('c-forecast').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}

