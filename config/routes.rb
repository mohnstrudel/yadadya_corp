Rails.application.routes.draw do

    devise_for :users, 
        controllers: {
          sessions: 'front/users/sessions',
          registrations: 'front/users/registrations'
        }, 
        path: '', 
        path_names: { 
          sign_in: 'login', 
          sign_out: 'logout', 
          sign_up: 'register', 
          edit: 'profile' 
        }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   scope module: :front do
    root "static_pages#home"

    get '/robots.:format' => 'errors#robots'

    match "/404", :to => "errors#not_found", :via => :all
    match "/500", :to => "errors#internal_server_error", :via => :all

    get 'about', to: 'static_pages#about'
    get 'contact', to: 'static_pages#contact'
    get 'services', to: 'static_pages#services'
    get 'projects', to: 'static_pages#projects'
    get 'blog', to: 'posts#index'

    resources :requests
  end

  # scope path: ':locale', locale: /#{I18n.available_locales.join("|")}/ do
  namespace :admin do
    get '', to: 'dashboard#index', as: '/'
    # get 'localize', to: 'locale#localize'

    # namespace :settings do
    #   get '', to: 'dashboard#index', as: '/'
    #   resources :general_settings, except: :show
    # end
    # resources :pages, except: :show
    resources :posts, except: :show
    # resources :page_categories, except: :show
    resources :post_categories, except: :show
    resources :users, except: :show
  end
# end
end
