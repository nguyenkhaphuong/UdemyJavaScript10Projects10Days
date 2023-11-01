let counterValue = 0

const counterDisplay = document.getElementById('counterDisplay')

const updateCounter = () => {
  counterDisplay.innerHTML = counterValue
}

const increment = () => {
  counterValue++
  updateCounter()
}

const decrement = () => {
  if (counterValue > 0) {
    counterValue--
    updateCounter()
  }
}

const reset = () => {
  counterValue = 0
  updateCounter()
}
