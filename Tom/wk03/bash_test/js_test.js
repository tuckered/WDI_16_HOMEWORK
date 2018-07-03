// JS Variables
var captain = 'Jack'

var phrase = "Oh " + captain + ", my " + captain + "!"

//JS Conditionals

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
  console.log('SOS!')
}

// Data Strctures - JS Arrays

var weekend = ["Saturday"]

weekend.push('Sunday')
weekend.unshift('Friday')

var day = weekend[1]

weekend.shift('Friday')

//Data Structures - JS Objects

var brain = {
  energyLevel: 10
}

var energy = brain.energyLevel

brain.dream = "electric sheep"

// S Function

var areaOfRectangle = function (length, width) {
  console.log(length*width)
}

areaOfRectangle(3,4)

// the function addFruit has a parameter arr which pushes to the array whatever is provided, in this case 'mango'. if it was called using arr.push('strawberry'), then strawberry would be added to the back of the array. 

// Create a function

var wordCheck = function(word) {
  if (word.split('').join() === word.split('').reverse().join()) {
    console.log("Congratulations, you've found a palindrome!")
  } else console.log("I'm so sorry, but this is just a regular, boring word.")
}

wordCheck('oxo')