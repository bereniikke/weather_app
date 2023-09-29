import apikey from './api'

const apiKey = apikey;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function displayWeather(weatherData) {
    // Access the elements in your HTML where you want to display the weather info
    const weatherInfoDiv = document.getElementById('weatherInfo');

    // Clear any previous weather information
    weatherInfoDiv.innerHTML = '';

    const temperatureKelvin = weatherData.main.temp;
    const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2); // Convert and round to 2 decimal places


    // Check if the weatherData contains valid information
    if (weatherData.cod === 200) {
        // Extract relevant information from the weatherData object
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        // Create HTML elements to display the weather information
        const cityHeading = document.createElement('h2');
        cityHeading.textContent = `Weather in ${cityName}`;

        const temperatureParagraph = document.createElement('p');
        temperatureParagraph.textContent = `Temperature: ${temperatureCelsius}°C`;


        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        // Append the elements to the weatherInfoDiv
        weatherInfoDiv.appendChild(cityHeading);
        weatherInfoDiv.appendChild(temperatureParagraph);
        weatherInfoDiv.appendChild(descriptionParagraph);
    } else {
        // Display an error message if weatherData contains an error
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Sorry, weather data not available for this city.';
        weatherInfoDiv.appendChild(errorMessage);
    }
}


document.getElementById('weatherForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  const weatherData = await getWeather(city);
  displayWeather(weatherData);
});
