     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

def run_sql(sql)
  conn = PG.connect(dbname: 'omdblist')
  result = conn.exec(sql)
  conn.close
  return result
end

def save_to_db 
  sql = "INSERT INTO movies(title, image_url, plot, year, director, actors, boxoffice, ratings, imdbid) VALUES 
  (
    '#{ @movie['Title'] }', 
    '#{ @movie['Poster'] }', 
    '#{ @movie['Plot'] }', 
    '#{ @movie['Year'] }', 
    '#{ @movie['Director'] }', 
    '#{ @movie['Actors'] }', 
    '#{ @movie['BoxOffice'] }', 
    '#{ @movie['Ratings'][2]['Value'] }',
    '#{ @movie['imdbID']}'
    );"
  run_sql(sql)
end



get '/' do

  erb :index
end

# THESE ARE ROUTES NOT PAGES!!!!!!!!!!!
get '/movie_search' do 
  @search = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&s=' + params[:movie_name])
  erb :search
end


get '/movie' do 
  sql  = "SELECT * FROM movies WHERE imdbid = ('#{params['imdbID']}')
  @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&i=' + params[:movie_name])
  save_to_db()
  erb :movies
end



if 