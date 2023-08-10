const inputEl = document.querySelector('#input-el');
const convertEl = document.querySelector('#convert-el');

convertEl.addEventListener('click', function () {
   const inputValue = inputEl.value
   calcValues('length', inputValue)
   calcValues('volume', inputValue)
   calcValues('mass', inputValue)
})

inputEl.addEventListener('keydown', function (event) {
   if (event.key === 'Enter') {
      convertEl.click();
   }
})

function calcValues(type, value) {
   let results = ''
   if (type === 'length') {
      const calcFeet = value * 3.2808
      const calcMeters = value / 3.2808
      results = `${value} meters = ${calcFeet.toFixed(3)} feet |  ${value} feet = ${calcMeters.toFixed(3)} meters`

      if (value <= 1) {
         results = `${value} meter = ${calcFeet.toFixed(3)} feet |  ${value} feet = ${calcMeters.toFixed(3)} meters`
      }
   } else if (type === 'volume') {
      const calcGaloon = value * 0.264172
      const calcLiters = value / 0.264172
      results = `${value} liters = ${calcGaloon.toFixed(3)} galoons |  ${value} galoons = ${calcLiters.toFixed(3)} liters`

      if (value <= 1) {
         results = `${value} liter = ${calcGaloon.toFixed(3)} galoon |  ${value} galoon = ${calcLiters.toFixed(3)} liters`
      }
   } else {
      const calcPounds = value * 2.20462
      const calcKilos = value / 2.20462
      results = `${value} kilos = ${calcPounds.toFixed(3)} pounds |  ${value} pounds = ${calcKilos.toFixed(3)} kilos`

      if (value <= 1) {
         results = `${value} kilo = ${calcPounds.toFixed(3)} pounds |  ${value} pound = ${calcKilos.toFixed(3)} kilos`
      }
   }

   const resultElement = document.querySelector(`#${type}-el`)
   resultElement.textContent = results
}