Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/patients', to: 'clinicians#patients'
  post '/signup', to: 'clinicians#signup'
  
  get '/validate', to: 'auth#validate'
  post '/signin', to: 'auth#signin'


end