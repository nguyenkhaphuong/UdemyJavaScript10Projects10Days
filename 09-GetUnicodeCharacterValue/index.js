const result = document.getElementById('result')

const detectInput = (e) => {
  e.preventDefault()

  const characterInput = document.getElementById('characterInputType').value

  if (!characterInput) {
    result.innerHTML = "<p style='color:red'>Please enter a character</p>"
    return
  }

  const unicodeValue = characterInput.charCodeAt(0)
  result.innerHTML = `The Unicode value of '${characterInput}' is ${unicodeValue}`
}

document.getElementById('inputForm').addEventListener('submit', detectInput)
