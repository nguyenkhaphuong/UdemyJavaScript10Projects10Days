document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('myForm').addEventListener('submit', calculateLove)
})

const calculateLove = (e) => {
  e.preventDefault()
  const name = document.getElementById('name').value.trim()
  const partnerName = document.getElementById('partnerName').value.trim()

  const nameErrorMessage = document.getElementById('nameErrorMessage')
  const partnerNameErrorMessage = document.getElementById(
    'partnerNameErrorMessage'
  )

  if (name == '') {
    nameErrorMessage.innerHTML = 'Please enter your name'
    return
  }

  if (partnerName == '') {
    nameErrorMessage.innerHTML = ''
    partnerNameErrorMessage.innerHTML = "Please enter your partner's name"
    return
  }

  const lovePercentage = Math.floor(Math.random() * 101)
  const result = document.getElementById('result')

  nameErrorMessage.innerHTML = ''
  partnerNameErrorMessage.innerHTML = ''
  result.innerHTML = `${name} and ${partnerName}'s Love Percentage is ${lovePercentage}%`

  if (lovePercentage < 30) {
    result.innerHTML += `<br>Not a Great Match! Keep looking!`
    return
  }

  if (lovePercentage >= 30 && lovePercentage < 70) {
    result.innerHTML += `<br>There is a potential! Give it a try!`
    return
  }

  if (lovePercentage >= 70) {
    result.innerHTML += `<br>Great Match! Love is in the Air!`
    return
  }
}
