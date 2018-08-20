const express = require('express')
const axios = require('axios')
const _ = require('lodash')

const app = express()
const PORT = 8888

app.set('view engine', 'ejs')
app.use(express.static('public'))


const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get('/', (req,res) => {
  var randomCompliment = _.sample(compliments)
  var randomColor = _.sample(colors)
  res.render('index', { randomCompliment, randomColor})
})

app.get('/:name',(req,res) => {
  var userName = req.params.name
  var randomCompliment = _.sample(compliments)
  var randomColor = _.sample(colors)
  res.render('name', { randomCompliment, randomColor, userName})
  // var name = 
})


var randCompliment = _.sample(compliments)
console.log(randCompliment)

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`) 
})

