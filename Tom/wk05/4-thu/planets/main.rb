require 'sinatra/reloader'     
require 'sinatra'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname: 'solarsystem')
  result = conn.exec(sql)
  conn.close
  return result
end

require_relative 'db_config'
require_relative 'models/planet'

# main page with lists of planets on them. 
get '/' do
  @planets = Planet.all
  erb :index
end


get '/planets/new' do
  erb :new
end


get '/planets/:id' do
  @planets = Planet.find(params[:id])
  erb :planet_details
end

get '/planets/:id/edit' do
  @planets = Planet.find(params[:id])
  erb :edit
end

post '/planets' do
  planet = Planet.new
  planet.name = params[:name]
  planet.image_url = params[:image_url]
  planet.km_from_sun = params[:km_from_sun]
  planet.save
  redirect "/"
  # redirect "/planets/#{ params[:planet_id] }"
end

put '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.name = params[:name]
  planet.image_url = params[:image_url]
  planet.save
  redirect "/planets/#{ params[:planet_id] }"
end

delete '/planets/:id/delete' do
  planet = Planet.find(params[:id])
  planet.destroy
  redirect "/"
end






