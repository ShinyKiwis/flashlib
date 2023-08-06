Rails.application.routes.draw do
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'

  resource :dashboard, only: [:show]  
  get 'dashboard/:slug/decks', to: 'decks#index', as: "deck"

  resource :session, only: [:destroy]
  resources :fclasses
  resources :decks, only: [:index, :create, :destroy]
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'

  root "sessions#new"
end
