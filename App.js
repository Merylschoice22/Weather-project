// Go to this URL and register https://openweathermap.org/appid
// Get your API KEY (appid)

const APIkey = "56ff6869ae6e4a328054f75904f02b09";
const baseURL = "https://api.weatherbit.io/v2.0/current?";

const cities = ["Barcelona", "Raleigh", "Madrid"];
const cityInput = "Raleigh";
const callWeatherAPIByCity = (city) => {
  const URL = `${baseURL}city=${city}&key=${APIkey}`;
  const call = fetch(URL);
  //if the call goes right || 200;
  call
    .then((response) => response.json())
    .then((weatherInfo) => showWeatherInfo(weatherInfo.data[0]));

  // if something goes wrong || 403, 404, 402 ...
  call.catch((error) => console.error("Something went wrong", error));
};

const showWeatherInfo = (weatherObject) => {
  const {
    city_name,
    country_code,
    temp,
    weather: { description, icon },
  } = weatherObject;

  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  const appTitle = document.createElement("div");
  appTitle.className = "app-title";
  container.appendChild(appTitle);
  const titleP = document.createElement("p");
  titleP.innerText = "Weather";
  appTitle.appendChild(titleP);
  const notification = document.createElement("div");
  notification.className = "notification";
  container.appendChild(notification);
  const weatherContainer = document.createElement("div");
  weatherContainer.className = "weather-container";
  container.appendChild(weatherContainer);
  const weatherIcon = document.createElement("div");
  weatherIcon.className = "weather-icon";
  weatherContainer.appendChild(weatherIcon);

  const weatherIconIMG = document.createElement("img");
  const iconID = icon.slice(1);
  weatherIconIMG.setAttribute("src", `icons/${iconID}.png`);
  weatherIcon.appendChild(weatherIconIMG);

  const temperatureValue = document.createElement("div");
  temperatureValue.className = "temperature-value";
  weatherContainer.appendChild(temperatureValue);

  const temperatureValueP = document.createElement("p");
  temperatureValueP.innerHTML = `${temp}° <span>C</span>`;
  temperatureValue.appendChild(temperatureValueP);
  const temperatureDescription = document.createElement("div");
  temperatureDescription.className = "temperature-description";
  weatherContainer.appendChild(temperatureDescription);
  const descriptionP = document.createElement("p");
  descriptionP.innerText = description;
  temperatureDescription.appendChild(descriptionP);
  //   const [descriptionDiv] = descriptionElements;
  //   const desc = weatherObject.weather.description;
  const location = document.createElement("div");
  location.className = "location";
  weatherContainer.appendChild(location);
  const locationP = document.createElement("p");
  locationP.innerText = `${city_name} - ${country_code}`;
  location.appendChild(locationP);
};

cities.forEach((city) => {
  callWeatherAPIByCity(city);
});

// callWeatherAPIByCity(cityInput);

//////////////////////////////////////////

/**** COORDINATES FOR SEARCH BY LOCATION
const latitude = 35.7796;
const longitude = -78.6382;
/******* SEARCH BY CURRENT USER POSITION
 
 const getUserPosition = () => {
   navigator.geolocation.getCurrentPosition(
     (location) => onPositionReceived(location),
     (error) => onPositionDenied(error)
     );
    };
    
    const onPositionReceived = (position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      callWeatherAPIWithCoords(latitude, longitude);
    };
    
    const onPositionDenied = (error) => {
      const { message } = error;
      console.error(error);
      const notificationDiv = document.getElementsByClassName("notification");
      const notification = notificationDiv[0];
      notification.style.display = "block";
      const p = document.createElement("p");
      p.innerText = message;
      notification.appendChild(p);
    };

    const callWeatherAPIWithCoords = (latitude, longitude) => {
  const URL = `${baseURL}lat=${latitude}&lon=${longitude}&key=${APIkey}`;
  const call = fetch(URL);
  //if the call goes right || 200;
  call
    .then((response) => response.json())
    .then((weatherInfo) => showWeatherInfo(weatherInfo.data[0]));

  // if something goes wrong || 403, 404, 402 ...
  call.catch((error) => console.error("Something went wrong", error));
};
    */
