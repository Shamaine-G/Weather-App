let cityInput = document.querySelector('.cityInput');
const btn = document.querySelector('.btn')
const cityData = document.createElement ("p");
const tempData = document.createElement('p');
const humidity = document.createElement('p');
const apiKey = "71cf1d17dbabac3721cd739117b14d66";
const weatherData = document.createElement('div')
document.body.appendChild(cityData);
document.body.appendChild(tempData);
document.body.appendChild(humidity);


async function getWeather(){
    const cityName = cityInput.value
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    const response = await fetch(Url);
    const result = await response.json();
    cityData.innerHTML = `City: ${result.name}`;
    tempData.innerHTML = `Temperature: ${result.main.temp}°F`;
    humidity.innerHTML = `Humidity: ${result.main.humidity}%`;
  
}



btn.addEventListener('click', async event => {
    event.preventDefault;
     getWeather();
    
});




