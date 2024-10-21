document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = 'SHA256:SaOYUWEbaH1kISpSZ8+zZrFqaUBRVY9XTvoi3e6j0uw=';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const weatherData = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    document.getElementById('weatherData').innerHTML = weatherData;
}
