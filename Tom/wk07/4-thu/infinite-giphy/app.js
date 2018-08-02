

var buttonClick = document.querySelector('.search_Btn')
buttonClick.addEventListener('click', function(event) {
  event.preventDefault()

  var gifSearch = document.querySelector('.giphySearch').value

  var searchRequest = $.get("http://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=VJOTaTGkypipTfFX0RT7zTXHhJII6NUw&limit=10")
  
  searchRequest.done(function(response) { 

    for (i = 0; i < 10; i++) {
  
      var resultItem = document.querySelector('.results')
      var newImg = document.createElement('img')
      var mp4Img = response.data[i].images.downsized_large.url
      newImg.src = mp4Img
      newImg.append(mp4Img)
      resultItem.append(newImg)
    }

  })

})


      



// giphy api : VJOTaTGkypipTfFX0RT7zTXHhJII6NUw