class Api::RoomsController < ApplicationController

  def index
    render json: Room.all
  end

  def show
    render json: Room.find(params[:id])
  end

  def create
    room = Room.new(name: params[:name], sun_amount: params[:sun_amount])
    if room.save
      render json: room
    else
      render json: { errors: room.errors }, status: :unprocessable_entity
    end
  end

  def update
    room = Room.find(params[:id])
    if room.update(room_params)
      render json: room
    else
      render json: { errors: room.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Room.find(params[:id]).destroy
    render json: { message: 'Room deleted' }
  end

  private
    def room_params
      params.require(:room).permit(:name, :sun_amount)
    end
end
