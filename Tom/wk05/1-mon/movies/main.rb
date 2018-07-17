     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  
  erb :index
end


get '/movie_search' do 
  @search = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&s=' + params[:movie_name])
  erb :search
end


get '/movie' do 
  @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t=' + params[:movie_name])
  erb :movies
end


