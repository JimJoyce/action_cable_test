Rails.application.routes.draw do
  get 'rooms/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'rooms#show'

  mount ActionCable.server => '/cable'
end
