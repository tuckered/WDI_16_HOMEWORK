
// Instructions for program
// 1) Listen to button click
// 2) On click call function
// 3) Make function make request to API

// (event) is a local variable. 
var buttonClick = document.querySelector('.search-Btn')
buttonClick.addEventListener('click', function(event) {
  event.preventDefault()
  
  var movie = document.querySelector('input').value
  
  $.ajax('http://omdbapi.com/?apikey=2f6435d9&s=' + movie).done(function(result) {
    for (i = 0; i < result.Search.length; i++) {
      
      var resultItem = document.querySelector('.results')
      var newP = document.createElement('p')
      var newImg = document.createElement('img')
      var newLink = document.createElement('a')
      

      var title = (result.Search[i].Title)
      newP.append(title)

      var poster = (result.Search[i].Poster)
      newImg.src = poster
      newImg.append(poster)
      
      
      newLink.href = poster
      newLink = poster


      resultItem.append(newP)
      resultItem.append(newImg)
      resultItem.append(newLink)
      
    } 
    
  })
})

// 4) Receive data from API
// 5) Filter what we want from API data
// 6) Add to results box on screen

