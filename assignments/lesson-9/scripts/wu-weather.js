
//The current temperature in Fahrenheit from conditions.
//The current wind speed in miles per hour from conditions.
//The image icon representing the current weather from conditions.

var weatherObj = new XMLHttpRequest();

weatherObj.open('GET', 'http://api.wunderground.com/api/c42874163b0f6ad9/conditions/q/MN/Franklin.json', true);

weatherObj.send();

weatherObj.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObj.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('img-current').src = weatherInfo.current_observation.icon_url;
    
}

var forecastObj = new XMLHttpRequest();

forecastObj.open('GET', 'http://api.wunderground.com/api/c42874163b0f6ad9/forecast/q/MN/Franklin.json', true);

forecastObj.send();

forecastObj.onload = function() {
    
    var forecastInfo = JSON.parse(forecastObj.responseText);
    console.log(forecastInfo);
    
    document.getElementById('c-forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
}