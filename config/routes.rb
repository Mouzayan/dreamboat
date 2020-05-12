Rails.application.routes.draw do
  resources :users do
    resources :encounters do
      resources :comments
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

#  ================ AUTH ======================
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'

end
