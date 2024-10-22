async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch(`http://backend:3000/weather?city=${city}`);
    const data = await response.json();
    document.getElementById('result').innerHTML = JSON.stringify(data);
}
