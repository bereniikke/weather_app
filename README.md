# Weather App

A simple web application that allows users to check the weather for a specific city.

### Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Open the index.html file on your web browser and run the application.

### Configuring API Key

To use this Weather App, you'll need to obtain an API key from a weather data provider such as OpenWeatherMap. Follow these steps:

1. Visit the website of your chosen weather data provider and sign up for an account if you don't have one already.
2. Once logged in, find the section for creating a new API key or access token. This process may vary depending on the provider.
3. Generate a new API key, and make sure it has permissions to access weather data.
4. Copy the generated API key.

Now that you have your API key, you'll need to configure the application to use it:

1. In the project directory, create a file named `api.js`.
2. Open `api.js` with a code editor.
3. Inside `api.js`, declare a constant variable and export it as follows:

   ```javascript
   // api.js
   const apiKey = 'YOUR_API_KEY_HERE';
   export default apiKey;
4. Replace 'YOUR_API_KEY_HERE' with the API key you obtained earlier. Save the file.

### Usage

1. Enter a city name in the input field (e.g., "New York").
2. Click the "Get Weather" button.
3. The weather information for the specified city will be displayed below.


