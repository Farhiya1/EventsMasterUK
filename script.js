// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
const eventContainer = document.querySelector(".event-container");
const weatherContainer = document.querySelector(".weather-container");
const historyArray = document.querySelector("#searchHistoryList > ul");
let video = document.querySelector("video");
// Storing Api Keys in const
const ticketMasterAPIKey = "8vWG87wRwlREjTnlTeKlyotzDgBt6A0G";
const openWeatherAPIKey = "988fbbe10b9a8419e74f5e6d95338e7c";
// Retreiving then storing live date from moment js to specify the events displayed to be for on the day. Using the variable 'Today' as a paremeter in teh feth call to get events data.
let Today = moment().format("YYYY-MM-DD");
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {
  // Once the search button is used, the video will be replaced with event and weather content
  video.remove();
  // Clearing event data on page when a new location is searched
  eventContainer.innerHTML = "";
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
      ticketMasterAPIKey +
      "&sort=date,asc" +
      "&city=" +
      locationInputEl.value +
      "&countryCode=GB" +
      "&startedatetime=" +
      Today +
      "&size=4"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data["_embedded"].events.forEach((event) => {
        eventContainer.innerHTML +=
          // Displaying weather data using parameters from API on html in a card
          ` <div class="card is-outlined mt-4">
    
    <div class="tile is-parent">
    <div class="tile is-child box ">
      <p class="title">${event.name}</p>
      <img  class= "image w-50%"src="https://app.ticketmaster.com/discovery/v2/img/w/${event.images[0].url}.png">
    </div>    
    <div class="tile is-ancestor">
<div class="tile is-parent">
<article class="tile is-child box">
<p class="title"> Status:</p>
  <p class="title"> ${event.dates.status.code}</p>
  
</article>
</div>    
<div class="tile is-parent">
<article class="tile is-child box">
<p class="title"> Price: £${event.priceRanges[0].max}</p>
</article>
</div>
    </div>`;
      });
    });
  // Clearing weather data when new location is searched
  weatherContainer.innerHTML = "";

  // Fetching weather data
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationInputEl.value},gb&appid=${openWeatherAPIKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      // Storing weather data into an object
      let weatherObject = {};
      weatherObject.temp = data.main.temp;
      weatherObject.name = data.name;
      weatherObject.weather = data.weather[0].main;
      weatherObject.weatherDescription = data.weather[0].description;
      weatherObject.weatherIcon = data.weather[0].icon;

      // Displaying weather data using parameters from API on html in a card
      weatherContainer.innerHTML += ` <div class="card col-is-small-5 mt-10">
      <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">${weatherObject.name}</p>
      <p class="subtitle">${weatherObject.temp}°C
      </p>
      <p class="subtitle">${weatherObject.weather}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
    </article>
  </div>
  </div>`;
    });
// Search button event listener to run function searchHandler
button.addEventListener("click", searchHandler);
