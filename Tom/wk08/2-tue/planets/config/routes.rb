Rails.application.routes.draw do
  resources :comments
  # resources :space_rocks

  # create
  get '/space_rocks/new', to: 'space_rocks#new'
  post '/space_rocks', to: 'space_rocks#create'

  #read
  get '/space_rocks', to: 'space_rocks#index'
  get '/space_rocks/:id', to: 'space_rocks#show'

  # update
  get '/space_rocks/:id/edit', to:
  'space_rocks#edit'
  put '/space_rocks/:id', to: 'space_rocks#update'

  #destroy
  get '/space_rocks/:id', to: 'space_rocks#destroy'

end
