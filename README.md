# Events Master UK

Project 1: Interactive Front-End Application

Building an interactive front-end application that will run in the browser and feature dynamically updated HTML and CSS and third-partys API with a group of developers.

# Why did we build this project?

The main purpose for why we built this project is so that we can learn how to use two third party APIs, access their data and functionality by making requests with specific parameters to a URL. The data we retreived and found relevant we used to create . This project has also allowed us to enhance our skills in javascript that we have been working on the past few weeks. Examples include: variables, functions, fetch. We were also able to use jquery as a tool to simplify our code and do the heavy lifting by making it easier to write javascript.

# What does this project solve?

This projects solves our ability in creating an interactive application with data retreived from two third party open APIs on the browser with the skills we have learned so far. It also allows for the user to search events for a city within the UK restricted by location. The content the user will receive are for the events for that day varying from theatre, concerts and bands. The user will also receive the current forecast for that location.

# Criteria set to achieve this?

```
I am searching for an event by city
WHEN I click the search button
THEN i am presented with the events for today in that city, as well as the weather forecast.

WHEN an event is displayed
THEN I am presented with the status, the date, and the title of the event.

WHEN the weather is displayed
THEN I am presented with the city name, the temperature and the weather description and an icon for representation.

WHEN I enter a new search
THEN the previous search is saved and displayed on the page.

```

# So far we have achieved?

1. Create the layout for the content on the page to be displayed using the CSS framework Bulma and html. We have also used javascript to dynamically append events and weather content on to the page, using cards. One for the current weather data and one for the location specified and two for the events.

2. Successfully retreived events and weather data from third party APIs. The APIs used was [TicketMaster API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) and [OpenWeather One Call API](https://openweathermap.org/api/one-call-api).

3. With the data retreived from the Open Weather API we were able to present the city name for the weather card, an icon representation of weather conditions, the temperature, and weather description.

4. We were able to present the data for each location entered by the user restricting to the day the location was searched using moment.js.

5. We were able to present the events on for that city for the location searched with a restriction of only four events to be displayed.

6. Saved users input and data retreived into local storage.

# What we intend to add in the near future?

1. We would like our search history to be interactive as once the user tries to click previous searches the events won’t display.

2. We would also like to add price ranges to display on our page so that the user can also view it alongside the events.

3. Provide a booking link so when clicked on the user is able to be redirected to a booking page, so that they’re able to book and pay for the events displayed.

4. User interface can be more polished using appropriate styling, such as smaller cards and images.

# To access this project the following links are provided:

To access Github Repository

1. https://github.com/Farhiya1/EventsMasterUK

To access Application deployed at live URL

2. https://farhiya1.github.io/EventsMasterUK/

To access presentation

## [Project presentation](https://docs.google.com/presentation/d/1vAqNAkiIF6cIm_4CPSOFB-BZ4m0XtgwN/edit?usp=sharing&ouid=113958077381292450925&rtpof=true&sd=true)

Back-up Presentation Link

## [Project presentation Back-up Link](https://www.canva.com/design/DAE3_apGzE8/kHrBIPCcxmFlTepXqIxoiQ/view?utm_content=DAE3_apGzE8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

# Screenshot of deployed application)

1. Screenshot displaying Events Master UK application (Home Page)

![Screenshot of completed appliciation](./images/Screenshot1-HomePage.png)

2. Screenshots displaying searched cities with current events and weather displayed

London
![Screenshot of completed application](./images/Screenshot2-SearchedCity1.png)
Birmingham
![Screenshot of completed application](./images/Screenshot3-SearchedCity2.png)

3. Screenshot displaying searched history list

![Screenshot of completed application](./images/Screenshot4-SearchedHistoryList.png)

4. Screenshot displaying array in local storage

![Screenshot of completed application](./images/Screenshot5-LocalStorageArray.png)

5. Screenshot displaying of page refreshed
   ![Screenshot of completed application](./images/Shreenshot6-RefreshedPageLS.png).

# References

1. https://openweathermap.org/api/one-call-api
2. https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
3. https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
4. https://www.w3schools.com/jquery/html_html.asp
5. https://www.sitepoint.com/jquery-each-function-examples/
6. https://birmingham.bootcampcontent.com/university-of-birmingham/
   UBHM-VIRT-FSF-PT-11-2021-U-LOL
7. https://momentjs.com/
8. https://bulma.io/
9. https://api.jquery.com/
10. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

# Collaborations

1. [Najma Tahar](https://github.com/nt14/EventsMaster)
2. [Samira Hirsi](https://github.com/samira0101/Event-Masters-UK)
