// Total balance of the account
var balance = 0

// Queryselectors for all the used elements on the page. 
var savingsBox = document.querySelector('.savings')
var savingsTotal = document.querySelector('.savingsTotal')
var savingsBalance = document.querySelector('.savingsBalance')
var savingsInput = document.querySelector('.savingsInput')
var savingsWithdrawBtn = document.querySelector('.savingsWithdraw')
var savingsDepositBtn = document.querySelector('.savingsDeposit')

var checkingBox = document.querySelector('.checking')
var checkingTotal = document.querySelector('.checkingTotal')
var checkingBalance = document.querySelector('.checkingBalance')
var checkingInput = document.querySelector('.checkingInput')
var checkingWithdrawBtn = document.querySelector('.checkingWithdraw')
var checkingDepositBtn = document.querySelector('.checkingDeposit')

// savDeposit adds the savings balance to the user input box. If the balance is greater than 0, the box colour is in it's default color.
var savDeposit = function() {
  savingsBalance.textContent = Number(savingsBalance.textContent) + Number(savingsInput.value)
  if (savingsBalance.textContent > 0) {
    savingsBox.style.background="#e1d1ec"
  }
}

// savWithdraw subtracts the user input from the savings balance. If it is less than 0, there is an alert and the box color changes to red. 
var savWithdraw = function () {

  // if they want more than they have
  if (Number(savingsInput.value) > Number(savingsBalance.textContent)) {
    alert('You don\'t have the funds to withdraw this amount. \nYou are now overdrawn.')
  }
  savingsBalance.textContent = Number(savingsBalance.textContent) - Number(savingsInput.value) 
 
  if (Number(savingsBalance.textContent) < 0) {
    savingsBox.style.backgroundColor="#be3636"
  } 
}

var checkingDeposit = function() {
  checkingBalance.textContent = Number(checkingBalance.textContent) + Number(checkingInput.value)
  if (checkingBalance.textContent > 0) {
    checkingBox.style.background="antiquewhite"
  }
}

// checkingWithdraw subtracts the user input from the savings balance. If it is less than 0, there is an alert and the box color changes to red. 
var checkingWithdraw = function() {
  
  if (Number(checkingInput.value) > Number(checkingBalance.textContent)) {
    alert('You don\'t have the funds to withdraw this amount. \nYou are now overdrawn.')
  }
  checkingBalance.textContent = Number(checkingBalance.textContent) - Number(checkingInput.value) 
  if (Number(checkingBalance.textContent) < 0) {
    checkingBox.style.backgroundColor="#be3636"
  }
}

// event listeners for the withdraw and deposit buttons for the savings box and the checking box. 
savingsDepositBtn.addEventListener('click', savDeposit)
savingsWithdrawBtn.addEventListener('click', savWithdraw)

checkingDepositBtn.addEventListener('click', checkingDeposit)
checkingWithdrawBtn.addEventListener('click', checkingWithdraw)



// toFixed for decimal places

// the presentation is just using the code and program you've used already. 

// document.querySelector('div').textContent = balance

// document.querySelector is essentially a search. It's saying, 'find this and give it this value'

// Then when you need to call it, create a function to use it. 

// var updateBalance = function() {
//   document.querySelector('div').textContent = balance
// }

// updateBalance()
