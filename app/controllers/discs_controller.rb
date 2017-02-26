class DiscsController < ApplicationController
  respond_to :json

  def index
    @discs = Disc.all

    render json: @discs    
  end

end

