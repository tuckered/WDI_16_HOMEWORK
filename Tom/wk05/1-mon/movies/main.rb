     
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
  ratings = if @movie['Ratings'][2]
    @movie['Ratings'][2]['Value']
  else
    'N/A'
  end
  sql = "INSERT INTO movies(title, image_url, plot, year, director, actors, boxoffice, ratings, imdbid) VALUES 
  (
    '#{ @movie['Title'] }', 
    '#{ @movie['Poster'] }', 
    '#{ @movie['Plot'] }', 
    '#{ @movie['Year'] }', 
    '#{ @movie['Director'] }', 
    '#{ @movie['Actors'] }', 
    '#{ @movie['BoxOffice'] }', 
    '#{ ratings }',
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
  sql = "SELECT * FROM movies WHERE imdbid = ('#{params['imdbID']}')"
  result = run_sql(sql)
  # looking at the database, seeing if there's a count of the imdbID, and if there isn't, saving it to database. 
  if result.cmd_tuples == 0
    @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&i=' + params[:imdbID])
    save_to_dbr
    # then it accesses OUR db (sql) and selects it to display the first one that matches. 
    sql = "SELECT * FROM movies WHERE imdbid = ('#{params['imdbID']}')"
    @movie = run_sql(sql).first
  else
    @movie = result.first
  end
  erb :movies
end