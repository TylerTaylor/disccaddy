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

  def add_to_bag
    user = User.find(disc_params[:user_id])
    disc = Disc.find(disc_params[:disc_id])
    disc.selected_weight = disc_params[:weight]
    
    user.discs << disc
  end

  def remove_from_bag
    user = User.find(disc_params[:user_id])
    disc = Disc.find(disc_params[:disc_id])

    user.discs.delete(disc)
  end

  private

  def disc_params
    params.permit(:user_id, :disc_id, :weight)
  end

end

