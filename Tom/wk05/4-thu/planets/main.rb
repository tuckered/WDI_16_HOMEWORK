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

# get '/planets/' do
#   redirect '/'
# end

# getting the form
get '/planets/new' do
  erb :new
end

# shows the planet details
get '/planets/:id' do
  @planets = Planet.find(params[:id])
  erb :planet_details
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


delete '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.destroy
  redirect "/"
end


get '/planets/:id/edit' do
  @planets = Planet.find(params[:id])
  erb :edit
end


put '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.name = params[:name]
  planet.image_url = params[:image_url]
  planet.km_from_sun = params[:km_from_sun]
  planet.save
  redirect "/planets/#{ params[:id] }"
end


