const value = document.querySelector('form')
const output = document.querySelector('.lowOrHi')
const array = document.querySelector('.guesses')
const attempts = document.querySelector('.lastResult')
const Expected = Math.floor(Math.random() * 100 + 1)

const arr = []
let number

value.addEventListener('submit', function (e) {
  e.preventDefault()
  number = parseInt(document.querySelector('.guessField').value)
  if (isNaN(number) || number > 100 || number<1) {
    output.innerHTML = `Enter Valid number`
  }
  else {
    if (number == Expected) {
      output.innerHTML = `Congratulations!! Your Guess is Correct`
      document.getElementById("subt").disabled = true;
    }
    else if (number < Expected) {
      output.innerHTML = `${number} is less than the number`
    }
    else {
      output.innerHTML = `${number} is greater than the number`
    }

    attempts.innerHTML--
    arr.push(number)
    array.innerHTML = arr

    if (attempts.innerHTML == 0) {
      output.innerHTML = `Game Over. Number was ${Expected}`
      document.getElementById("subt").disabled = true;
    }
  }
})
