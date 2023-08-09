Rails.application.routes.draw do
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'

  resource :dashboard, only: [:show]  
  get 'dashboard/:slug/decks', to: 'decks#index', as: "dashboard_deck"

  resource :session, only: [:destroy]
  resources :fclasses
  resources :decks, only: [:index, :create, :destroy]
  get 'dashboard/:slug/decks/:id', to: 'decks#show', as: 'deck_study'
  resources :cards, only: [:create]
  get ':slug/decks/:id/edit', to: 'decks#edit', as: "edit_deck"
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'

  root "dashboards#show"
end 
