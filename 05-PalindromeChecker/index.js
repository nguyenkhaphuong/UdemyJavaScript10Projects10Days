document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('myForm').addEventListener('submit', submitForm)
})

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  console.log(cleanStr)

  const reverseStr = cleanStr.split('').reverse().join('')
  console.log(reverseStr)

  return cleanStr === reverseStr
}

const submitForm = (e) => {
  e.preventDefault()

  const input = document.getElementById('textInput').value
  const errorMessage = document.getElementById('errorMessage')

  let result = document.getElementById('result')

  if (input == '') {
    errorMessage.innerHTML = 'Please enter a word or a number'
    return
  }

  errorMessage.innerHTML = ''

  if (!isPalindrome(input)) {
    result.innerHTML = `${input} is NOT a Palindrome`
    return
  }

  result.innerHTML = `${input} is a Palindrome`
}
