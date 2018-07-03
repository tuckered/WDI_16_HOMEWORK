var balance = 0
var savingsBox = document.querySelector('.savings')
var savingsTotal = document.querySelector('.savingsTotal')
var savingsBalance = document.querySelector('.savingsBalance')
var savingsInput = document.querySelector('.savingsInput')
var savingsWithdrawBtn = document.querySelector('.savingsWithdraw')
var savingsDepositBtn = document.querySelector('.savingsDeposit')


var checkingTotal = document.querySelector('.checkingTotal')
var checkingBalance = document.querySelector('.checkingBalance')
var checkingInput = document.querySelector('.checkingInput')
var checkingWithdrawBtn = document.querySelector('.checkingWithdraw')
var checkingDepositBtn = document.querySelector('.checkingDeposit')


var savDeposit = function() {
  savingsBalance.textContent = Number(savingsBalance.textContent) + Number(savingsInput.value)
}

// toFixed for decimal places
var savWithdraw = function () {
  savingsBalance.textContent = Number(savingsBalance.textContent) - Number(savingsInput.value) 
  // if (Number(savingsBalance.textContent) - Number(savingsInput.value) <= 0) {
  //   savingsBalance.textContent = 0
  // }
  if (Number(savingsBalance.textContent) - Number(savingsInput.value) <= 0) {
    savingsBox.style.backgroundColor="#be3636"
  } else savingsBox.style.backgroundColor="#e1d1ec"

//if (chequeBalance > 0){
  document.querySelector('.cheque').style.backgroundColor = "#fdf035";
}

var checkingDeposit = function() {
  checkingBalance.textContent = Number(checkingBalance.textContent) + Number(checkingInput.value)
}

var checkingWithdraw = function() {
  checkingBalance.textContent = Number(checkingBalance.textContent) - Number(checkingInput.value) 
  if (Number(checkingBalance.textContent) - Number(checkingInput.value) <= 0) {
    checkingBalance.textContent = 0
  }
}


savingsDepositBtn.addEventListener('click', savDeposit)
savingsWithdrawBtn.addEventListener('click', savWithdraw)

checkingDepositBtn.addEventListener('click', checkingDeposit)
checkingWithdrawBtn.addEventListener('click', checkingWithdraw)

// var desposit = function() {
// //   savingsBalance = savingsBalance + Number(savingsInput.value)
// }





// var savWithdraw = function () {
//   var total = Number(savingsInput.value)
//   savingsBalance.textContent = total

// }





// // savingsInput.value 

balance = 0



var withdraw = function(amount) {
  balance = balance - amount
}








// var deposit = function(amount) {
//   balance = balance + amount
// }

// var withdraw = function(amount) {
//   balance = balance - amount
// }

// the presentation is just using the code and program you've used already. 

// document.querySelector('div').textContent = balance

// document.querySelector is essentially a search. It's saying, 'find this and give it this value'

// Then when you need to call it, create a function to use it. 

// var updateBalance = function() {
//   document.querySelector('div').textContent = balance
// }

// updateBalance()
