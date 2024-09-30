const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const apiKey = "43b696b9d4c3a7541d4a9b0cbe41a3ac";

const getWeatherDetails = (cityname, lat, lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert("An error occurred while fetching the weather forecast!");
    });
}

const getCityDetails = () => {
    let cityName = cityInput.value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if(!data.length) return alert(`No coordinates found for ${cityName}`);
        const { name, lat, lon} = data[0];
        getWeatherDetails(name, lat, lon);
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!");
    });
}    
searchButton.addEventListener("click", getCityDetails);