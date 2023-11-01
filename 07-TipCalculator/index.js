const billAmountInput = document.getElementById('billAmount')
const serviceRatingSelect = document.getElementById('serviceRating')
const numberOfPeopleInput = document.getElementById('numberOfPeople')
const mealTypeSelect = document.getElementById('mealType')

const result = document.getElementById('result')

const handleSubmit = (e) => {
  e.preventDefault()

  const billAmount = parseFloat(billAmountInput.value)
  const serviceRating = parseInt(serviceRatingSelect.value)
  const numberOfPeople = parseInt(numberOfPeopleInput.value)
  const mealType = mealTypeSelect.value

  if (!billAmount || !numberOfPeople || !serviceRating) {
    result.textContent = 'All fields are required'
    return
  }

  if (isNaN(billAmount) || isNaN(numberOfPeople)) {
    result.textContent = 'Please enter valid numbers'
    return
  }

  let tip

  switch (serviceRating) {
    case 1:
      tip = billAmount * 0.05
      break
    case 2:
      tip = billAmount * 0.1
      break
    case 3:
      tip = billAmount * 0.15
      break
    case 4:
      tip = billAmount * 0.2
      break
  }

  let totalAmount = tip + billAmount
  let amountPerPerson = totalAmount / numberOfPeople

  if (mealType === 'dinner') {
    tip += 5
    totalAmount += 5
    amountPerPerson += 5
  }

  result.innerHTML = `Tip: <strong>$${tip.toFixed(2)}</strong><br>`
  result.innerHTML += `Total Amount: <strong>$${totalAmount.toFixed(
    2
  )}</strong><br>`
  result.innerHTML += `Amount Per Person: <strong>$${amountPerPerson.toFixed(
    2
  )}</strong><br>`
}

document.getElementById('tipCalForm').addEventListener('submit', handleSubmit)
