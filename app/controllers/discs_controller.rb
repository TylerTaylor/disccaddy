class DiscsController < ApplicationController
  respond_to :json

  def index
    @discs = Disc.all

    render json: @discs    
  end

  def show
    @disc = Disc.find(params[:id])

    render json: @disc
  end

  def my_bag
    user = User.find(params[:user_id])
    discs = user.discs

    render json: discs
  end

end

