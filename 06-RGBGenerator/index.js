const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

const redValueSpan = document.getElementById('redValue')
const greenValueSpan = document.getElementById('greenValue')
const blueValueSpan = document.getElementById('blueValue')

const colorBox = document.getElementById('colorBox')
const inputType = document.getElementById('inputType')

const updateColor = () => {
  const redValue = redSlider.value
  const greenValue = greenSlider.value
  const blueValue = blueSlider.value

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`

  inputType.innerHTML = rgbColor
  colorBox.style.backgroundColor = rgbColor

  redValueSpan.innerHTML = redValue
  greenValueSpan.innerHTML = greenValue
  blueValueSpan.innerHTML = blueValue
}

updateColor()

redSlider.addEventListener('input', updateColor)
greenSlider.addEventListener('input', updateColor)
blueSlider.addEventListener('input', updateColor)

const copyRGB = () => {
  const redValue = redSlider.value
  const greenValue = greenSlider.value
  const blueValue = blueSlider.value

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`

  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert(`${rgbColor} copied to clipboard successfully!`)
    })
    .catch((err) => {
      alert(err.message)
    })
}
