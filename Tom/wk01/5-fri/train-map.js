// console.log('toot toot')

//TO USE? 
// arr.indexOf(searchElement[, fromIndex])

// start and end stations will want to referenece the index within the array
// 

// OTHER TWO ARRAYS

var trainLines = [
    ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],

    ['Southern Cross', 'Richmond', 'South Yarra', ' Prahran', 'Windsor'],

    ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
]

var depart = "Flinders Street"
var arrive = "Burnley"


// for (var i = 0; i < trainLines.length; i++) {
// 	for (var j = 0; j < trainLines.length; j++) {
// 		if (trainLines[i][j] === depart) {
//             depart = indexDepart  
//         }   
//     }
// }

var getIndexOfDepart = function (depart) {
  for (var i = 0; i < trainLines.length; i++) {
    var index = trainLines[i].indexOf(depart);
    if (index > -1) {
      return [i, index];
    }
  }
}







// Object.values(obj)
var stations = Object.keys(trainLines)
for (var i = 0; i < stations.length; i++) {
  if (stations[i] === depart) {
      console.log(Object.keys(stations[i]))
  }
}


var stations = Object.keys(trainLines)
for (var i = 0; i < stations.length; i++) {
  console.log(trainLines[stations[i]])
}

// // var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', ' Prahran', 'Windsor']

// var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']


// var depart = "Flinders Street"
// var arrive = "Burnley"
var indexDepart = trainLines.indexOf(depart)
var indexArrive = trainLines.indexOf(arrive)

var trip = trainLines.slice(indexDepart, indexArrive + 1)
var tripReversed = trainLines.slice(indexArrive, indexDepart + 1).reverse()

// if (indexDepart > indexArrive) {
//     console.log(tripReversed.join(" -----> "))
// } else console.log(trip.join(" -----> "))

// if (indexDepart > indexArrive) {
//     console.log('Number of stops ' + (indexDepart - indexArrive))
// } else console.log('Number of stops ' + (indexArrive - indexDepart))
// }

// // This is my logic for joining the stations together. list1.slice values being the depart station (0) to richmond (3), and the list2.slice index being richmond (0) to the arrival station (3). I know this will double up richmond but I think might be able to do + or - 1 somewhere in there to include / omit as neccessary.
// var list1 = [1,2,3,4,5]
// var list2 = [6,7,8,9,10]

// var list1Slice = list1.slice(0, 3).join(' -----> ')
// var list2Slice = list2.slice(0, 3).join(' -----> ')
// var totalList = list1Slice + (' -----> ') + list2Slice 


// //WORKING TWO WAYS
// // var depart = "Flinders Street"
// // var arrive = "South Yarra"
// var indexDepart = alamein.indexOf(depart)
// var indexArrive = alamein.indexOf(arrive)

// var trip = alamein.slice(indexDepart, indexArrive + 1)
// var tripReversed = alamein.slice(indexArrive, indexDepart + 1).reverse()

// if (indexDepart > indexArrive) {
//     console.log(tripReversed.join(" -----> "))
// } else console.log(trip.join(" -----> "))

// if (indexDepart > indexArrive) {
//     console.log('Number of stops ' + (indexDepart - indexArrive))
// } else console.log('Number of stops ' + (indexArrive - indexDepart))




