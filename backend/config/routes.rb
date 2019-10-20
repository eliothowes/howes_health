Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/patients', to: 'clinicians#patients'
  post '/signup', to: 'clinicians#signup'
  
  get '/validate', to: 'auth#validate'
  post '/signin', to: 'auth#signin'

  post '/heart_rate', to: 'heart_rates#create'
  post '/blood_pressures', to: 'blood_pressures#create'
  post '/resp_rates', to: 'resp_rates#create'
  post '/temps', to: 'temps#create'
  post '/o2_sats', to: 'o2_sats#create'
  post '/irreg_episodes', to: 'irreg_episodes#create'
  post '/height', to: 'heights#create'
  post '/weight', to: 'weights#create'
  post '/active_calories', to: 'active_calories#create'
  post '/calorie_intake', to: 'calorie_intakes#create'
  post '/exercise_duration', to: 'exercise_durations#create'
  post '/flights_climbed', to: 'flights_climbed#create'
  post '/steps', to: 'steps#create'
  post '/time_standing', to: 'time_standings#create'
  post '/blood_glucose', to: 'blood_glucoses#create'
  post '/falls', to: 'falls#create'
  post '/mindful_minutes', to: 'mindful_minutes#create'

end