const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherContainer = document.getElementById("weather-container");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`/weather/${city}`);
        const data = await response.json();

        if (data.error) {
            weatherContainer.innerHTML = `<p style="color:red;">${data.error}</p>`;
            return;
        }

        displayWeather(data);
    } catch (err) {
        weatherContainer.innerHTML = `<p style="color:red;">Error fetching data</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;
    weatherContainer.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Feels Like:</strong> ${main.feels_like} °C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Weather:</strong> ${weather[0].description}</p>
        <p><strong>Wind:</strong> ${wind.speed} m/s</p>
    `;
}