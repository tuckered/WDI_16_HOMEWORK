// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

// function combineWords(word1, word2) {
// 	return word1 + word2 
//     // TODO: Place your code here
// }
// var result = combineWords('dog', 'house');
// console.log(result);

// // displays 'doghouse'

// var combineWords = function(word1, word2) {
//     return word1 + word2
// }

// var result = combineWords('dog', 'house')
// console.log(result)

var combineWords = function (word01, word02) {
    return word01 + word02
}

var result = combineWords('happy ', 'tree')
console.log(result)



// // var combineWords = function(word1, word2) {
// //     return word01 + word02
// // }

// // var newWord = combineWords('slack' + 'house')
// // console.log(result)





// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// // - Call the function three times with different sets of values.


var calculateAge = function(currentYear, birthYear) {
    var age = currentYear - birthYear
    var ageBeforeBirthday = age - 1
    return 'you are either ' + ageBeforeBirthday + ' or ' + age
}

var result = calculateAge(2018, 1963)
console.log(result)




// 3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// I didn't manage to complete this one.  
// Will have a crack in the morning. 
// var lengths = function (array) {
    // var newArr = []
    // 
    // for (var i = 0; i > (array.length); i++) {
    // newArr.push(array[i].length)
    // }
    // 
    // return array
// }
// 
// console.log(lengths())

// var lengths = function(arrOfStrings) {
//     // make a new empty container
//     var newArr = []

//     for (var i = 0; i < arrOfStrings.length; i++) {
//         // add it to the empty container
//         newArr.push(arrOfStrings[i].length)
//     }
//     return newArr
// }

// // return the container


// // for (var i = 0; i > 0; i++) {
//     //     languages.[i].length
// // }

// var languages = ['js', 'ruby', 'css']
// console.log (lengths(languages))




// 4 TRANMOGRIFIER

var transmogrifier = function(numA, numB, numC) {
    var product = numA * numB
    var output = Math.pow(product, numC)

    return output
}

console.log(transmogrifier(1, 4, 4))

// 5 wordREVERSE
// Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// var wordReverse = function(message) {
//     console.log(message.reverse())
// }
// wordReverse("hello there")


// var wordReverse = function(message) {
//     var reversedMessage = message
//     return reversedMessage
// }


// var wordReverse = function(message) {
// // takes message, splits message to create array, reverse array, join array,
//     var arrSplit = message.split(' ')
//     var arrReversed = arrSplit.reverse()
//     var joinedArr = arrReversed.join(' ')
//     return joinedArr
// }
// var reversedMessage = wordReverse('you are you are')
// console.log(reversedMessage)

var wordReverse = function(message) {
        var messageSplit = message.split(' ').reverse().join(' ')
        return messageSplit
    }
    var reversedMessage = wordReverse('sorry Im making you miss love island')
    console.log(reversedMessage)