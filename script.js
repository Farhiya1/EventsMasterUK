// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
// Storing Api Keys in const
const ticketMasterAPIKey = "8vWG87wRwlREjTnlTeKlyotzDgBt6A0G";
const openWeatherAPIKey = "988fbbe10b9a8419e74f5e6d95338e7c";
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {
// Search button event listener to run function searchHandler
button.addEventListener("click", searchHandler);
