Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'

  scope "/api" do
    resources :discs

    resources :users do
      get 'discs' => 'discs#my_bag', as: 'my_bag'
      post 'discs/add_to_bag/:disc_id' => 'discs#add_to_bag', as: 'add_to_bag'
    end
  end

end
