//TO DO
// When to user clicks on a city, display an alert
// Clicking "I accept" will dismiss the cookie policy message
// - Make an "active" class to slowly animate it into being, then remove it on a setTimeout by taking the class off.
// Convert the temperatures when the <select> element is changed

console.log("Script connected!")
const weekDisplayContainer = document.getElementById("week-display")
const cookieContainer = document.getElementById("cookie-container")
const tempUnit = document.getElementById("temp-unit")
let tempValue = tempUnit.value
let weatherArray = [
  {
    day: "Today",
    imgSrc: "./assets/some_rain.png",
    description: "some rain",
    highs: 24,
    lows: 16,
  },
  {
    day: "Tomorrow",
    imgSrc: "./assets/some_sun.png",
    description: "some sun",
    highs: 27,
    lows: 19,
  },
  {
    day: "Friday",
    imgSrc: "./assets/some_clouds.png",
    description: "some clouds",
    highs: 21,
    lows: 16,
  },
  {
    day: "Saturday",
    imgSrc: "./assets/some_sun.png",
    description: "some sun",
    highs: 26,
    lows: 21,
  },
]

function changeHighsAndLows() {
  tempValue = tempUnit.value
  if (tempValue === "fahrenheit") {
    for (let i = 0; i < weatherArray.length; i++) {
      weatherArray[i].highs = convertToFahrenheit(weatherArray[i].highs)
      weatherArray[i].lows = convertToFahrenheit(weatherArray[i].lows)
    }
  } else if (tempValue === "celsius") {
    for (let i = 0; i < weatherArray.length; i++) {
      weatherArray[i].highs = convertToCelsius(weatherArray[i].highs)
      weatherArray[i].lows = convertToCelsius(weatherArray[i].lows)
    }
  }
  renderWeather()
}

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function renderWeather() {
  let output = ""

  for (let i = 0; i < weatherArray.length; i++) {
    output += `<article class="flex day-container">
    <h2>${weatherArray[i].day}</h2>
    <img
      class="weather-img"
      src="${weatherArray[i].imgSrc}"
      alt="${weatherArray[i].description}"
    />
    <span>${weatherArray[i].description}</span>
    <div class="temperature-container flex">
      <span class="highs">${Math.floor(weatherArray[i].highs)}&#176;</span
      ><span class="lows">${Math.floor(weatherArray[i].lows)}&#176;</span>
    </div>
  </article>`
    weekDisplayContainer.innerHTML = output
  }
}

function setTempUnit(tempVal, highs, lows) {
  switch (tempVal) {
    case "fahrenheit":
      console.log("fah")
      break
    case "celsius":
      console.log("cel")
      break
    default:
      break
  }
}

function displayAlert() {
  alert("Loading weather report...")
}

function displayCookie() {
  cookieContainer.classList.add("active")
}

function hideCookie() {
  cookieContainer.classList.remove("active")
  setTimeout(() => {
    cookieContainer.remove()
  }, 4000)
}

renderWeather()
setTimeout(displayCookie, 3000)
console.log(convertToCelsius(75))
console.log(convertToFahrenheit(24))
