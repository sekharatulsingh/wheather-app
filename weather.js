document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    displayMockWeather(city);
});

function displayMockWeather(city) {
    // Simulated weather data
    const mockData = {
        name: city,
        main: {
<<<<<<< HEAD
            temp: Math.floor(Math.random() * 30) + 10,
            humidity: Math.floor(Math.random() * 100)
        },
        weather: [
            { description: 'Clear sky' }
=======
            temp: Math.floor(Math.random() * 30) + 10, // Random temp between 10 and 40
            humidity: Math.floor(Math.random() * 100) // Random humidity
        },
        weather: [
            { description: 'Clear sky' } // Static description for testing
>>>>>>> acf044a601f02449a3817033fbfefcb63a7695bf
        ]
    };

    const weatherData = `
        <h2>${mockData.name}</h2>
        <p>Temperature: ${mockData.main.temp} °C</p>
        <p>Weather: ${mockData.weather[0].description}</p>
        <p>Humidity: ${mockData.main.humidity}%</p>
    `;
    document.getElementById('weatherData').innerHTML = weatherData;
}