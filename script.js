// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
let video = document.querySelector("video");
// Storing Api Keys in const
const ticketMasterAPIKey = "8vWG87wRwlREjTnlTeKlyotzDgBt6A0G";
const openWeatherAPIKey = "988fbbe10b9a8419e74f5e6d95338e7c";
// Retreiving then storing live date from moment js to specify the events displayed to be for on the day. Using the variable 'Today' as a paremeter in teh feth call to get events data.
let Today = moment().format("YYYY-MM-DD");
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {
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
// Search button event listener to run function searchHandler
button.addEventListener("click", searchHandler);
