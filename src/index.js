// JS Goes here - ES6 supported

import "./css/style.scss";


var today = new Date();

var hours = today.getHours();


let day = document.querySelector('.day')
let night = document.querySelector('.night')

if (hours > 8 || hours < 16) {
    day.style.display = "block";
    night.style.display = "none";

}

if (hours < 8 || hours > 16) {
    day.style.display = "none";
    night.style.display = "block";
    
    let blurred = document.querySelector('h1')
    blurred.classList.add('blur');

}

