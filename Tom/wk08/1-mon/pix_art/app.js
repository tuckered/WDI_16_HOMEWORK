var searchForm = $('.search-form')
var inputBox = $(".color-select")
var setColor = $(".set-color-btn")
var brushBox = $(".brush-box")
var pixelWall = $(".pixels")

function handleSubmit(event) {
  event.preventDefault()
  var color = inputBox.val()
  $(".brush-box").css( "background-color", color)
  
}
// make the element first, do what you want to it and then append it


for (var i = 0; i < 1000; i ++){
  var pixels = $('.pixels').append( "<div></div>" )
  $(pixels).children().addClass('square')
  
  console.log(i)
}


searchForm.on('click', handleSubmit)