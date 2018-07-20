CREATE DATABASE omdblist

CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  image_url VARCHAR(500),
  plot VARCHAR(500),
  year INTEGER,
  director VARCHAR(100),
  actors VARCHAR(500),
  boxoffice VARCHAR(100),
  ratings VARCHAR(100)
);

INSERT INTO movies (title, image_url, plot, year, director, actors, boxoffice, ratings) VALUES ('hjfdkshfdks', 'http://wanna-joke.com/wp-content/uploads/2014/11/funny-clint-cake-cunt.jpg', 'there is a shark', 1992, 'steven', 'cribbage', '$300', '45%');