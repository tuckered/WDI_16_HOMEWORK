// // The Fortune Teller

var numberOfChildren = prompt('How many kids do you want?')
var partnersName = prompt('What is your partners name and title?')
var geoLocation = prompt('Where do you want to live?')
var dreamJob = prompt('What is your dream job?')

console.log('You will be a ' + dreamJob + ' in ' + geoLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.');


// The Age Calculator

var currentYear = 2018
var birthYear = prompt('What year were you born?');
var age = currentYear - birthYear
var ageBeforeBirthday = age - 1;

console.log('They are either ' + ageBeforeBirthday + ' or ' + age);

// The Lifetime Supply Calculator

var favSnack = prompt('What is your most favourite snack?');
var currentAge = prompt('What is your current age?')
var maxAge = prompt('What age would you like to live it?')
var estAmount = prompt('How many do you eat a day?');

var totalAmount = (maxAge - currentAge) * (estAmount * 365);

console.log('You will need ' + totalAmount + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge + '.');

