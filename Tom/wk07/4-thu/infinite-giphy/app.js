var buttonClick = document.querySelector('.search_Btn')
buttonClick.addEventListener('click', function(event) {
  event.preventDefault()

  var gifSearch = document.querySelector('.giphySearch').value

  var searchRequest = $.get("http://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=VJOTaTGkypipTfFX0RT7zTXHhJII6NUw&search=100")
  
  searchRequest.done(function(response) { 

    for (i = 0; i < 10; i++) {
  
      var resultItem = document.querySelector('.results')
      var newImg = document.createElement('img')
      var mp4Img = response.data[i].images.downsized_large.url
      console.log(i)
      newImg.src = mp4Img
      newImg.append(mp4Img)
      resultItem.append(newImg)
    }
  })

  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      searchRequest.done(function(response) { 
        var j = 21
        for (i = 10; i < j; i++) {
          console.log(i)
          resultItem = document.querySelector('.results')
          newImg = document.createElement('img')
          mp4Img = response.data[i].images.downsized_large.url
          newImg.src = mp4Img
          newImg.append(mp4Img)
          resultItem.append(newImg)
          if (i % 10 === 0) {
            console.log('true')
            j= j + 10
          }
        }
      })
    }
  })
})


// var j = 50
// for (i = 10; i < j; i++) {
//   if (i % 10 === 0) {
//     j = j + 10
//   }
// }
   


// for (i = 10; i < j; i++) {
//   console.log('i='+i)
// 	if (i % 10 === 0) {
//     console.log('true')
//     j= j + 10
//   }
// }

// for (j = 0; j < 0; j++) {
//   for (var i = 1; i < j; i++) {
// if (i % 10 === 0) {
// j = j + 10
//   }
//   console.log('i='+i)
//   }
// console.log('j='+j)
// }

// giphy api : VJOTaTGkypipTfFX0RT7zTXHhJII6NUw