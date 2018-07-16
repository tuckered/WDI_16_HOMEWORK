     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  
  erb :index
end

get '/movie' do 
  if params[:movie_name]
    @movie = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t=' + params[:movie_name])
  end
  erb :movies
end


