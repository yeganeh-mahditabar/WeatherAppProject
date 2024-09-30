const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const getCityDetails = () => {
    let cityName = cityInput.value.trim();
    if(!cityName) return;
    
    console.log(cityName);
}    
searchButton.addEventListener("click", getCityDetails);