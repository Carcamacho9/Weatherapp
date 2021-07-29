import { kelvinToCelsius } from './temperature'

export const climApp = async (city) => {
    const apiKey = "21d807407fc08f0dca752a98c2c9b2d1";
    const baseURL = "https://api.openweathermap.org/";
    const api = `${baseURL}data/2.5/weather?q=${city}&appid=${apiKey}&lang=sp`;
    const response = await fetch(api);
    
    const weatherData = await response.json();

    const { name, sys, main, weather, message } = weatherData;

    const country = document.querySelector('.country');
    const capital = document.querySelector('.city');
    const temperature = document.querySelector('.temperature');
    const containerderecha = document.querySelector('.container-derecha__resultado');
    const description = document.querySelector('.description');

    if(message === "city not found"){
        input.placeholder = "Ubicación no válida";
        input.className = 'bad-input';
        input.focus();
        country.innerHTML = "";
        capital.innerHTML = "";
        temperature.innerHTML = "0 °C";
        description.innerHTML = "";
    }else{
        description.innerHTML = weather[0].description;
        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        icon.className = 'icon';
        containerderecha.appendChild(icon);
        country.innerHTML = sys.country;
        capital.innerHTML = name;
        temperature.innerHTML = `${kelvinToCelsius(main.temp)} °C`
    }
    
}
