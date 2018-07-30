var cities = ["NYC", "SF", "LA", "ATX", "SYD"]


cities.forEach(function(location) {
  var city = document.createElement("option")
  var node = document.createTextNode(location)
  city.appendChild(node)
  var element = document.getElementById("city-type")
  element.appendChild(city) 
})


document.addEventListener('change', function(event) {
  background = document.querySelector('body')
  if (event.target.value === 'NYC') {
    background.className = 'nyc'
  } else if (event.target.value === 'SF') {
    background.className = 'sf'
  } else if (event.target.value === 'LA') {
    background.className = 'la'
  } else if (event.target.value === 'ATX') {
    background.className = 'austin'
  } else if (event.target.value === 'SYD') {
    background.className = 'sydney'
  }
})
