Rails.application.routes.draw do


  root "houses#index"

  resources :houses
  resources :students

  
  # get '/houses', to: '/houses#index'



end


