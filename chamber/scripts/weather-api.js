const API_KEY='96041568304db82685ebbff63fa1327b'

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-condition');
const windSpeed = document.querySelector('#windspeed');
const windChill = document.querySelector('#windchill');

const url=`https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&appid=${API_KEY}`


function getWindChill(windSpeed, currentTemp)
{
    if(windSpeed < 3)
    {
        return `N/A`;
    }
    else if(currentTemp > 50)
    {
        return `N/A`;
    }
    else
    {
        return 35.74 + (.6215*currentTemp)-(35.75*(windSpeed**.16))+(.4275*currentTemp*(windSpeed**.16));
    }
}


async function apiFetch() 
{
    try 
    {
      const response = await fetch(url)
      if (response.ok) 
      {
        const data = await response.json()
        console.log(data)
        displayResults(data)
      } 
      else 
      {
          throw Error(await response.text())
      }
    } 
    catch (error) 
    {
        console.log(error)
    }
  }
  



function displayResults(weatherData) 
{
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)} °F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    let wc = getWindChill(weatherData.wind.speed, weatherData.main.temp);
    windSpeed.innerHTML = `Windspeed: ${weatherData.wind.speed.toFixed(0)} mph`;
    windChill.innerHTML = `Windchill: ${wc.toFixed(0)} °F`;
  }

  apiFetch()