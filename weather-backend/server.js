const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock weather data
const mockWeatherData = {
    "New York": { temperature: "15°C", condition: "Clear" },
    "Los Angeles": { temperature: "20°C", condition: "Sunny" },
    "Chicago": { temperature: "10°C", condition: "Cloudy" },
};

app.get('/weather', (req, res) => {
    const city = req.query.city;
    const weather = mockWeatherData[city];

    if (weather) {
        res.json({ city, ...weather });
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
