var colorSeachForm = $('.color-search-form')
var inputBox = $(".color-select")
var setColor = $(".set-color-btn")
var brushBox = $(".brush-box")
var movieSeachForm = $(".movie-search-form")
var movieInput = $(".movie-input")
var movieSearchButton = $(".movie-search-button")
var pixelWall = $(".pixels")



function handleSubmit(event) {
  event.preventDefault()
  var color = inputBox.val()
  $(".brush-box").css( "background-color", color)
  
}
colorSeachForm.on('click', handleSubmit)


// make the element first, do what you want to it and then append it



function searchMovie(event) {
  event.preventDefault()

  const options = {
    url: `http://omdbapi.com/?apikey=2f6435d9&t=${ movieInput.val() }`,
    method: 'get',
    dataType: 'json'
  }

  // var posterSearch = $.get(`http://omdbapi.com/?apikey=2f6435d9&t=${ movieInput.val() }`)
  // debugger
  // posterSearch.Search["Poster"]
  // console.log(posterSearch)


  
  const searchPoster = (function(response){
    var poster = response["Poster"]
    
    $(".pixels").css( "background-image", "url(" + poster + ")")
  })
  $.ajax(options).done(searchPoster)
}



  // .done(function(response){
  //   var poster = repsonse.Search[0]["Poster"]
  //   $(".pixels").css( "background-image", poster)
  //   debugger
  // })
  

  // const movieImage = function (response) {
  //   const movie = response.searchMovie
  //   var movieItem = $(movie).text(movie["Poster"])
  //   $(".pixels").css( "background-image", movieItem)
  // }




for (var i = 0; i < 1000; i ++){
  var pixels = $('.pixels').append( "<div></div>" )
  $(pixels).children().addClass('square')
}

function selectColor(event) {
  var color = inputBox.val()
  $(event.target).css("background-color", color)
}

$(".square").on('mouseover', selectColor)

movieSeachForm.on('click', searchMovie)