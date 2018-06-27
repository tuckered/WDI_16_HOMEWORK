// console.log('toot toot')

//TO USE? 
// arr.indexOf(searchElement[, fromIndex])

// start and end stations will want to referenece the index within the array
// 

// OTHER TWO ARRAYS


var trainLines = {

glenwaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],

sandringham: ['Southern Cross', 'Richmond', 'South Yarra', ' Prahran', 'Windsor'],

alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],

}

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']

var depart = "Glenferrie"
var arrive = "Flinders Street"
var indexDepart = alamein.indexOf(depart)
var indexArrive = alamein.indexOf(arrive)

var trip = alamein.slice(indexDepart, indexArrive + 1)
var tripReversed = alamein.slice(indexArrive, indexDepart + 1).reverse()

if (indexDepart > indexArrive) {
    console.log(tripReversed.join(" -----> "))
} else console.log(trip.join(" -----> "))

if (indexDepart > indexArrive) {
    console.log('Number of stops ' + (indexDepart - indexArrive))
} else console.log('Number of stops ' + (indexArrive - indexDepart))



// var lineNames = Object.keys(trainLines)
// for (var i = 0; i < lineNames.length; i++) {
//   console.log(trainLines[lineNames[i]])
// }