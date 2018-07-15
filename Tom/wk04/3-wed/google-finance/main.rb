require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'stock_quote'


get '/' do
  if params[:stock_symbol]
    @stock = StockQuote::Stock.quote(params[:stock_symbol])
  end
  erb :index
end




# get '/' do
#   @stock = StockQuote::Stock.quote(params[:stock_symbol])
#   erb :index
# end


# binding.pry


































# get '/home' do
#   return "<h1>Want to know a current stock price?</h1><a href='/stock_price'>Click Here</a>"
# end

# get '/stock_price' do #anything after the domain the request is coming into /about
#   erb(:index)
# end

# get '/sum' do
#   @total = StockQuote::Stock.quote(params[:stock_request]).latest_price
#   erb(:stock_page)
# end


# get '/sum' do
#    @total = StockQuote::Stock.quote("msft").latest_price
#    erb(:stock_page)
#  end
