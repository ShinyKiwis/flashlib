Rails.application.routes.draw do
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'

  resources :dashboards, only: [:show]
  resource :session, only: [:destroy]
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'

  root "sessions#new"
end
