const calculateAge = (e) => {
  e.preventDefault()
  const today = new Date()
  const dateOfBirth = document.getElementById('dateOfBirth').value
  const birthDateParts = dateOfBirth.split('/')

  const resultContainer = document.getElementById('resultContainer')
  const result = document.getElementById('result')

  const birthDay = birthDateParts[0]
  const birthMonth = birthDateParts[1] - 1
  const birthYear = birthDateParts[2]

  const birthDate = new Date(birthYear, birthMonth, birthDay)

  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
    )
  }

  if (birthDay > 31 || birthMonth > 12 || birthYear <= 0 || birthYear > today) {
    alert('Invalid Date of Birth. Please enter a valid date in DD/MM/YYYY.')
    return
  }

  if (!isValidDate(birthDate)) {
    alert('Invalid Date Format. Please enter a valid date in DD/MM/YYYY.')
    return
  }

  const ageInMiliseconds = today - birthDate
  const ageInSeconds = Math.floor(ageInMiliseconds / 1000)
  const ageInMinutes = Math.floor(ageInSeconds / 60)
  const ageInHours = Math.floor(ageInMinutes / 60)
  const ageInDays = Math.floor(ageInHours / 24)
  const ageInWeeks = Math.floor(ageInDays / 7)
  const ageInMonths = Math.floor(ageInDays / 30.436875)
  const ageInYears = Math.floor(ageInDays / 365.25)

  result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years, ${ageInMonths % 12} Months, ${
    ageInDays % 30
  } Days</p>
        </div>
        <div class="result-item">
            <h3>Years Passed:</h3>
            <p>${ageInYears} Years</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInMonths} Months</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks} Weeks</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays} Days</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours} Hours</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes} Minutes</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds} Seconds</p>
        </div>
        <div class="result-item">
            <h3>Miliseconds Passed:</h3>
            <p>${ageInMiliseconds} Miliseconds</p>
        </div>
  `

  resultContainer.style.display = 'block'
}

document.getElementById('ageCalForm').addEventListener('submit', calculateAge)
