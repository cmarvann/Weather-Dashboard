// Add Event Listener
var repoList = document.querySelector('ul');
var usersContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");
var searchButton = document.getElementById("search")
console.log(searchButton);


function geolocation(location) {

// location
var locationApi = "http://api.openweathermap.org/geo/1.0/direct?q="+location+"&appid=be81d1b33c6ad5c77820da7ad5ef1aa2"
  // connects 
  fetch(locationApi)
   .then (function (response) {
    // console.log(response)
    return response.json()
}) .then(function (data) {
    console.log(data)
    // console.log(data [0].lat)
    // console.log(data [0.].lon)
    getWeatherData(location, data[0].lat, data [0].lon)
    // getWeatherData(data [0].lat,data[0].lon)
 

});
}


function getWeatherData(location, lat, log) {
 
var weatherData = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon="+log + "&appid=be81d1b33c6ad5c77820da7ad5ef1aa2&units=imperial&exclude=minutely,hourly,alerts"
fetch(weatherData)
.then (function (response) {
 // console.log(response)
 return response.json()
}) .then(function (data) {
  // call out function ( city,data)
 console.log(data)
//  console.log(data.current.temp);

 var currentTemp= document.getElementById("current-temperature");
 currentTemp.textContent = "Temp: " +  data.current.temp + " °F" ;

 var currentWind= document.getElementById("current-wind");
 currentWind.textContent = "Wind: " +  data.current.wind_speed + " MPH";

 var currentHumidity= document.getElementById("current-humidity");
 currentHumidity.textContent = "Humidity: " +  data.current.humidity + " %";

 var currentIndex= document.getElementById("current-index");
 currentIndex.textContent = "Index: " +  data.current.uvi + " ";

 fiveday(data)
});

// Five-Day-Forecast
console.log(document.getElementById("cityname").value);

  function fiveday(data) {
// 0
var forecastTemp= document.getElementById("forecast-temperature-0");
 forecastTemp.textContent = "Temp: " +  data.daily [1].temp.day + " °F" ;
console.log(data.daily [1].temp.day)  
 var forecastWind= document.getElementById("forecast-wind-0");
 forecastWind.textContent = "Wind: " +  data.daily [1].wind_speed + " MPH";

 var forecastHumidity= document.getElementById("forecast-humidity-0");
 forecastHumidity.textContent = "Humidity: " +  data.daily [1].humidity + " %";

 var dateStr =  data.daily [1].dt;
 var fcCity= document.getElementById("forecast-date-0");
 var fcDate = new Date(dateStr * 1000);  //Date.parse(dateStr);
//  console.log(fcDate)
 var fcDateStr = (fcDate.getMonth() + 1) + "/" + fcDate.getDate() + "/" + fcDate.getFullYear();
//  console.log(fcDateStr)
 fcCity.textContent =  fcDateStr;

 //Get forecast weather icon
 var icon = data.daily[1].weather[0].icon;
 var fcImg = document.getElementById("forecast-img-0");
 fcImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

// 1
 var forecastTemp= document.getElementById("forecast-temperature-1");
 forecastTemp.textContent = "Temp: " +  data.daily[2].temp.day + " °F" ;

 var forecastWind= document.getElementById("forecast-wind-1");
 forecastWind.textContent = "Wind: " +  data.daily[2].wind_speed + " MPH";

 var forecastHumidity= document.getElementById("forecast-humidity-1");
 forecastHumidity.textContent = "Humidity: " +  data.daily[2].humidity + " %";

 var dateStr =  data.daily[2].dt;
 var fcCity= document.getElementById("forecast-date-1");
 var fcDate = new Date(dateStr * 1000);  //Date.parse(dateStr);
//  console.log(fcDate)
 var fcDateStr = (fcDate.getMonth() + 1) + "/" +  fcDate.getDate()  + "/" +  fcDate.getFullYear();
//  console.log(fcDateStr)
 fcCity.textContent =  fcDateStr;

 //Get forecast weather icon
 var icon = data.daily[2].weather[0].icon;
 var fcImg = document.getElementById("forecast-img-1");
 fcImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
 

// 2
var forecastTemp= document.getElementById("forecast-temperature-2");
forecastTemp.textContent = "Temp: " +  data.daily[3].temp.day + " °F" ;

var forecastWind= document.getElementById("forecast-wind-2");
forecastWind.textContent = "Wind: " +  data.daily[3].wind_speed + " MPH";

var forecastHumidity= document.getElementById("forecast-humidity-2");
forecastHumidity.textContent = "Humidity: " +  data.daily[3].humidity + " %";

var dateStr =  data.daily[3].dt;
var fcCity= document.getElementById("forecast-date-2");
var fcDate = new Date(dateStr * 1000);  //Date.parse(dateStr);
var fcDateStr = (fcDate.getMonth() + 1) + "/" +  fcDate.getDate()  +  "/" +  fcDate.getFullYear();
fcCity.textContent =  fcDateStr;

//Get forecast weather icon
var icon = data.daily[3].weather[0].icon;
var fcImg = document.getElementById("forecast-img-2");
fcImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


// 3
var forecastTemp= document.getElementById("forecast-temperature-3");
forecastTemp.textContent = "Temp: " +  data.daily[4].temp.day + " °F" ;

var forecastWind= document.getElementById("forecast-wind-3");
forecastWind.textContent = "Wind: " +  data.daily[4].wind_speed + " MPH";

var forecastHumidity= document.getElementById("forecast-humidity-3");
forecastHumidity.textContent = "Humidity: " +  data.daily[4].humidity + " %";

var dateStr =  data.daily[4].dt;
var fcCity= document.getElementById("forecast-date-3");
var fcDate = new Date(dateStr * 1000);  //Date.parse(dateStr);
var fcDateStr = (fcDate.getMonth() + 1) + "/" + fcDate.getDate() + "/" +    fcDate.getFullYear();
fcCity.textContent =  fcDateStr;

//Get forecast weather icon
var icon = data.daily[4].weather[0].icon;
var fcImg = document.getElementById("forecast-img-3");
fcImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


// 4
var forecastTemp= document.getElementById("forecast-temperature-4");
forecastTemp.textContent = "Temp: " +  data.daily[5].temp.day + " °F" ;

var forecastWind= document.getElementById("forecast-wind-4");
forecastWind.textContent = "Wind: " +  data.daily[5].wind_speed + " MPH";

var forecastHumidity= document.getElementById("forecast-humidity-4");
forecastHumidity.textContent = "Humidity: " +  data.daily[5].humidity + " %";

var dateStr =  data.daily[5].dt;
var fcCity= document.getElementById("forecast-date-4");
var fcDate = new Date(dateStr * 1000);  //Date.parse(dateStr);
var fcDateStr = (fcDate.getMonth() + 1) + "/" + fcDate.getDate() + "/" + fcDate.getFullYear();
fcCity.textContent =  fcDateStr;

//Get forecast weather icon
var icon = data.daily[5].weather[0].icon;
var fcImg = document.getElementById("forecast-img-4");
fcImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

// });
}
}
 function displayItems (city, data) {
  currentWeather (city, data.current, data.timezone);
  forecastWeather (city, data.future, data.timezone);
 }

 function currentWeather(city,weather,timezone) {
  // date info
  var tempF = weather.temp
 }

//  geolocation(document.getElementById("cityname").value);
 
 // The Call
function functionSearch() {
 console.log(document.getElementById("cityname").value); // logging
  
 geolocation(document.getElementById("cityname").value);

 var storeCities= document.getElementById("search-history");
 
 // modify
 storeCities.innerHTML = storeCities.innerHTML + "<div class=\"search-history-item\">" + document.getElementById("cityname").value + "</div>";
 
 var currentCity= document.getElementById("current-name");
 
 var today = new Date();
 var todayStr = (today.getMonth() + 1)  + "/" + today.getDate() + "/" + today.getFullYear();
 currentCity.textContent = document.getElementById("cityname").value + " " + todayStr;



 document.getElementById("cityname").value = "";



}

searchButton.addEventListener("click", functionSearch);



// Function to display 5 day forecast.
// JWH
