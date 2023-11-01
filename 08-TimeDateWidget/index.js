let hoursSpan = document.getElementById('hours')
let minutesSpan = document.getElementById('minutes')
let secondsSpan = document.getElementById('seconds')

let dateContainer = document.querySelector('.date_container')

let hour = hoursSpan
let minute = minutesSpan
let second = secondsSpan

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const updateTime = () => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  hour.innerHTML = hours.toString().padStart(2, '0')
  minute.innerHTML = minutes.toString().padStart(2, '0')
  second.innerHTML = seconds.toString().padStart(2, '0')
}

const updateDate = () => {
  const now = new Date()
  const daysName = days[now.getDay()]
  const monthsName = months[now.getMonth()]
  const date = now.getDate()

  dateContainer.innerHTML = `${daysName},  <h2 style='font-size: 2.5rem;'>${date}</h2> <h5>${monthsName}</h5>`
}

setInterval(() => {
  updateTime()
  updateDate()
}, 1000)
