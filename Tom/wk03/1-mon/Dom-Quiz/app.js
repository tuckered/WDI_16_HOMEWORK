var heading2 = document.querySelector('ul>h1')
var buttonBox = document.querySelector('button')
var box = document.querySelector('.box')
var colorBox = document.querySelector('#fav-color')
var drawBtn = document.querySelector('.draw-btn')
var luckyNumbers = document.querySelector('.lucky-numbers')

heading2.textContent = 'Friend'

// /(4.) Store the contents of the input box element with id 'fav-color' into a variable called 'favColor'.

var favColor = colorBox.textContent
// ) How would you add an event listener to the button element inside the div with class box, so that when it is clicked the background colour of the div with class box changes to red?

var changeColor = function (event) {
  event.target.classList.add('box-coloured')
}

buttonBox.addEventListener('click', changeColor)



// (6.) Write the neccessary code so when the button is clicked a new list item with a random number between 1 and 45 is appended to the unordered list with the class 'lucky-numbers'

var randNum = function () {
  var node = document.createElement("li");
  var textnode = document.createTextNode(Math.floor(Math.random()*46))
  node.appendChild(textnode)
  document.querySelector(".lucky-numbers").appendChild(node)
}

drawBtn.addEventListener('click', randNum)

// Math.floor(Math.random()*46));