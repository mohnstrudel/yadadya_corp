Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   scope module: :front do
    root "static_pages#home"

    get 'about', to: 'static_pages#about'
    get 'contact', to: 'static_pages#contact'
    get 'services', to: 'static_pages#services'
    get 'projects', to: 'static_pages#projects'
    get 'blog', to: 'static_pages#blog'

    resources :requests
  end
end
