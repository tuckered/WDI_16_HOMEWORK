var plus5 = document.querySelector('.plus-5')
var plus10 = document.querySelector('.plus-10')
var timer = document.querySelector('.timer')
var countDownBtn = document.querySelector('.countdown')
var resetBtn = document.querySelector('.reset')


var timer5Seconds = function() {
  timer.textContent = Number(timer.textContent) + Number(5)
}

var timer10Seconds = function() {
  timer.textContent = Number(timer.textContent) + Number(10)
}

var resetTimer = function() {
  timer.textContent = 0
  clearTimeout(startTimer)
}

var startTimer = function() {
  timer = timer.textContent*1000
  countDown = setTimeout(alertFunc, timer)
}

function alertFunc() {
  alert('Times up!!')
}

plus5.addEventListener('click', timer5Seconds)
plus10.addEventListener('click', timer10Seconds)
timer.addEventListener('click', startTimer)
countDownBtn.addEventListener('click', startTimer)
resetBtn.addEventListener('click', resetTimer)