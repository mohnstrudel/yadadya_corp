Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  
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
    
    get 'services', to: 'services#services'

    scope 'services' do
      get '', to: 'services#services'
      get 'ecom', to: 'services#ecom'
      get 'custom_development', to: 'services#custom_development'
      get 'support', to: 'services#support'
      get 'mobile', to: 'services#mobile'

      get 'website', to: 'services#corporate'
      get 'clients', to: 'services#clients'

      get 'branding', to: 'services#firmstyle'
      get 'bitrix24', to: 'services#bitrix'
    end
    
    get 'projects', to: 'static_pages#projects'
    # get 'blog', to: 'posts#index'
    
    scope 'blog' do
      resources :post_categories, path: "", controller: 'posts', only: [:show, :index] do
        resources :posts, path: "", only: [:show, :index]
      end
    end

    # get 'blog/:id', to: 'posts#show', as: 'blog_post'



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
