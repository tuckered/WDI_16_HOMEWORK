CREATE DATABASE solarsystem

CREATE TABLE planets(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  image_url VARCHAR (400),
  km_from_sun INTEGER
);

