const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

let lastModif = new Date(document.lastModified);

document.getElementById("lastModified").textContent = "Last modification: " + lastModif

const temperature = 86;
const windSpeed = 28.76;

function calculateWindChill(temp, speed) {
    return (
        13.12 + 
        0.6215 * temp - 
        11.37 * Math.pow(speed, 0.16) + 
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(2);
}

function displayWindChill() {
    let windChill;

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed);
    } else {
        windChill = "N/A";
    }

    document.querySelector("#windChill").textContent = `${windChill}`;
}

window.onload = displayWindChill;