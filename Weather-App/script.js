const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weather = document.getElementById("weather");

async function getWeather(city) {
    try {
        loading.textContent = "Loading...";
        error.textContent = "";
        weather.innerHTML = "";

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );

        if (!locationResponse.ok) {
            throw new Error("Location request failed");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error("City not found");
        }

        const location = locationData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );

        if (!weatherResponse.ok) {
            throw new Error("Weather request failed");
        }

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        weather.innerHTML = `
            <h2>${location.name}</h2>
            <p><strong>Temperature:</strong> ${current.temperature_2m}°C</p>
            <p><strong>Humidity:</strong> ${current.relative_humidity_2m}%</p>
            <p><strong>Wind Speed:</strong> ${current.wind_speed_10m} km/h</p>
        `;

    } catch (err) {
        error.textContent = err.message;
    } finally {
        loading.textContent = "";
    }
}

searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});