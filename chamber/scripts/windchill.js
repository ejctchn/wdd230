//take in temperature
let temp = document.querySelector('#temp').textContent;
let degree = " &#176;F";
//return the span
let tempFinal = '<span id="temp"> Temperature: ' + temp + "<sup>" + degree + "</sup></span>";

//return the string to html
document.querySelector('#temp').outerHTML = tempFinal;


//take in windspeed
let windS = document.querySelector('#windspeed').textContent;
document.querySelector('#windspeed').outerHTML = '<span id="windspeed"> Wind Speed: ' + windS + ' mph</span>';

//calculate wind chill
let windC = (-(0.0817 * ((3.71 * windS)**0.5 + 5.81 - 0.25 * windS) * (parseFloat(temp) - 91.4) + 91.4)).toFixed(1);

let windFinal = '<span id="windchill"> Wind Chill: ' + windC + '<sup> &#176;F</sup></span>';

document.querySelector('#windchill').outerHTML = windFinal;