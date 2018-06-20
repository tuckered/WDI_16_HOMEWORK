// console.log('arrays and objects')

//arrays vs objects

//array
//- a list
// a grouping
// a container
// index set of stored variables
//                 [0]     [1]     [2]     [3]
// var colours = ['red', 'blue', 'green' 'pink']


//objects
// - a list
// some sort of container 
// pthings paired together. 
// doesn't have to always be a sting, can be any data type

// var song = {
//     title: 'let it be',
//     artist: 'beatles',
//     year: 1969,
//     albums: ['let it go', ' numbers 1s'] 
// }
// var song2 = {
//     title: 'so so',
//     artist: 'what',
//     year: 1989,
//     albums: ['dhjksa', ' dhsjakhj'] 
// }

// var list = [song, song2]

//The Recipe Card
var recipes = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
}

console.log(recipes.title)
console.log('Serves ' + recipes.servings)
console.log('Ingredients:')
console.log(recipes.ingredients[0])
console.log(recipes.ingredients[1])
console.log(recipes.ingredients[2])

// The Reading List

// var books = [book1, book2, book3]

// var book1 = {
//     title: 'The Twits',
//     author: 'Roald Dahl',
//     alreadyRead: true,
// }

// var book2 = {
//     title: 'The Green Mile',
//     author: 'Stephen King',
//     alreadyRead: false,
// }

// var book3 = {
//     title: 'The Amber Spyglass',
//     author: 'Philip Pullman',
//     alreadyRead: true,
// }

// console.log(book1.title + ' by ' + book1.author)
// console.log(book2.title + ' by ' + book2.author)
// console.log(book3.title + ' by ' + book3.author)


// The Reading List
var books = [

{
    title: 'The Twits',
    author: 'Roald Dahl',
    alreadyRead: true
},

{
    title: 'The Green Mile',
    author: 'Stephen King',
    alreadyRead: false
},

{
    title: 'The Amber Spyglass',
    author: 'Philip Pullman',
    alreadyRead: true,
}
]

for (var i = 0; i < books.length; i++) {
       
    if (books[i].alreadyRead == true) {
        console.log('You have already read ' + books[i].title + ' by ' + books[i].author)
    } else {
        console.log('You have not read ' + books[i].title + ' by ' + books[i].author)
    }
}



//The Movie Database
 var favMovie = {
     title: 'The Shining',
     duration: 126,
     stars: ['Jack Nicholson', ' Shelley Duvall', ' Danny Lloyd'],
     rating: '5 star',
     
}

function movie () {
    console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' terror fuelled minutes. \nIt stars: ' + favMovie.stars + 'and has a ' + favMovie.rating + ' rating on TMDB.') 
}
movie()

