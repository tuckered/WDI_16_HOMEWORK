var searchForm = $('.search-form')
var inputBox = $(".color-select")
var setColor = $(".set-color-btn")
var brushBox = $(".brush-box")

function handleSubmit(event) {
  event.preventDefault()
  var color = inputBox.val()
  $(".brush-box").css( "background-color", color)
}

searchForm.on('click', handleSubmit)