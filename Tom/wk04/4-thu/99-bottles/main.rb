require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do 
  erb :index
end

get '/0' do 
  erb :zero
end 

get '/:num_bottles' do
  @num_bottles = params[:num_bottles]
  erb :num_bottles
end









